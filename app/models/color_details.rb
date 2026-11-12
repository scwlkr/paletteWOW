# Server-side color information; the generator's browser helpers live in lib/color.js.
class ColorDetails
  attr_reader :hex, :rgb, :hue, :saturation, :lightness

  def initialize(hex)
    raise ArgumentError, "Expected six hexadecimal digits" unless hex.is_a?(String) && hex.match?(/\A[0-9a-fA-F]{6}\z/)

    @hex = "##{hex.downcase}"
    @rgb = hex.scan(/../).map { |channel| channel.to_i(16) }
    red, green, blue = rgb.map { |channel| channel / 255.0 }
    low, high = [ red, green, blue ].minmax
    delta = high - low
    @lightness = (high + low) / 2
    @saturation = delta.zero? ? 0.0 : delta / (1 - (2 * lightness - 1).abs)
    @hue = if delta.zero?
      0.0
    elsif high == red
      60 * (((green - blue) / delta) % 6)
    elsif high == green
      60 * ((blue - red) / delta + 2)
    else
      60 * ((red - green) / delta + 4)
    end
  end

  def slug
    hex.delete_prefix("#")
  end

  def formats
    high = rgb.max / 255.0
    low = rgb.min / 255.0
    cmyk = high.zero? ? [ 0, 0, 0, 100 ] : rgb.map { |channel| ((high - channel / 255.0) / high * 100).round(1) } + [ ((1 - high) * 100).round(1) ]
    {
      "HEX" => hex.upcase,
      "RGB" => "rgb(#{rgb.join(', ')})",
      "HSL" => "hsl(#{hue.round % 360}, #{(saturation * 100).round(1)}%, #{(lightness * 100).round(1)}%)",
      "HSB" => "#{hue.round % 360}°, #{(high.zero? ? 0 : (high - low) / high * 100).round(1)}%, #{(high * 100).round(1)}%",
      "CMYK" => cmyk.map { |channel| "#{channel}%" }.join(", "),
      "LAB" => lab.join(", ")
    }
  end

  def name
    nearest_names.first.last
  end

  def similar
    nearest_names.reject { |color, _| color.casecmp?(slug) }.first(6)
  end

  def tints
    mix(255)
  end

  def shades
    mix(0)
  end

  def harmonies
    {
      "Complementary" => [ 0, 180 ],
      "Analogous" => [ 0, 30, -30 ],
      "Triadic" => [ 0, 120, 240 ],
      "Tetradic" => [ 0, 60, 180, 240 ],
      "Split-complementary" => [ 0, 150, 210 ]
    }.transform_values { |offsets| offsets.map { |offset| offset.zero? ? hex : rotate(offset) } }
  end

  def contrast(background)
    luminances = [ luminance, background.luminance ].sort
    ratio = (luminances.last + 0.05) / (luminances.first + 0.05)
    { ratio: ratio, aa: ratio >= 4.5, aaa: ratio >= 7, aa_large: ratio >= 3, aaa_large: ratio >= 4.5 }
  end

  def luminance
    rgb.map { |channel| linear(channel) }.zip([ 0.2126, 0.7152, 0.0722 ]).sum { |value, weight| value * weight }
  end

  def text_color
    luminance > 0.179 ? "#000000" : "#ffffff"
  end

  def self.search_names(query)
    hex = query.delete_prefix("#")
    hex = hex.chars.map { |digit| digit * 2 }.join if hex.match?(/\A[0-9a-fA-F]{3}\z/)
    return new(hex).nearest_names if hex.match?(/\A[0-9a-fA-F]{6}\z/)

    named_colors.filter_map { |color, name, _| [ color.downcase, name ] if name.downcase.include?(query.downcase) }
      .sort_by { |_, name| name.downcase }
  end

  def nearest_names
    @nearest_names ||= begin
      exact, others = self.class.named_colors.partition { |color, _, _| color.casecmp?(slug) }
      vector = ntc_vector
      sorted = others.sort_by do |_, _, candidate|
        vector.zip(candidate).each_with_index.sum { |(a, b), index| (a - b)**2 * (index < 3 ? 1 : 2) }
      end
      (exact + sorted).map { |color, name, _| [ color.downcase, name ] }
    end
  end

  private

  def linear(channel)
    value = channel / 255.0
    value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055)**2.4
  end

  def lab
    red, green, blue = rgb.map { |channel| linear(channel) }
    xyz = [
      (0.4124 * red + 0.3576 * green + 0.1805 * blue) / 0.9505,
      0.2126 * red + 0.7152 * green + 0.0722 * blue,
      (0.0193 * red + 0.1192 * green + 0.9505 * blue) / 1.089
    ].map { |value| value > 0.008856 ? Math.cbrt(value) : (841.0 / 108) * value + 4.0 / 29 }
    [ 116 * xyz[1] - 16, 500 * (xyz[0] - xyz[1]), 200 * (xyz[1] - xyz[2]) ].map { |value| value.round(2) }
  end

  def mix(target)
    (1..10).map { |step| to_hex(rgb.map { |channel| (channel + (target - channel) * step / 10.0).round }) }
  end

  def rotate(offset)
    h = ((hue + offset) % 360) / 60
    chroma = (1 - (2 * lightness - 1).abs) * saturation
    second = chroma * (1 - (h % 2 - 1).abs)
    channels = [ [ chroma, second, 0 ], [ second, chroma, 0 ], [ 0, chroma, second ],
      [ 0, second, chroma ], [ second, 0, chroma ], [ chroma, 0, second ] ][h.floor]
    to_hex(channels.map { |channel| ((channel + lightness - chroma / 2) * 255).round })
  end

  def to_hex(channels)
    "#" + channels.map { |channel| channel.clamp(0, 255).to_s(16).rjust(2, "0") }.join
  end

  # Preserve ntc's signed hue, truncation and weighted RGB/HSL distance so
  # approximate names agree with the vendored browser library, not just exact hits.
  def ntc_vector
    red, green, blue = rgb.map { |channel| channel / 255.0 }
    low, high = [ red, green, blue ].minmax
    delta = high - low
    light = (low + high) / 2
    sat = light > 0 && light < 1 ? delta / (light < 0.5 ? 2 * light : 2 - 2 * light) : 0
    h = 0.0
    if delta > 0
      h += (green - blue) / delta if high == red && high != green
      h += 2 + (blue - red) / delta if high == green && high != blue
      h += 4 + (red - green) / delta if high == blue && high != red
      h /= 6
    end
    rgb + [ (255 * h).to_i, (255 * sat).to_i, (255 * light).to_i ]
  end

  def self.named_colors
    @named_colors ||= JSON.parse(Rails.root.join("config/color_names.json").read).map do |hex, name|
      [ hex, name, new(hex).send(:ntc_vector) ]
    end
  end
end
