require "test_helper"

class PaletteTest < ActiveSupport::TestCase
  test "saved palettes require an owner" do
    palette = Palette.new(hex_codes: [ "#123456", "#abcdef" ])
    assert_not palette.valid?
    assert_includes palette.errors.attribute_names, :user
  end

  test "colors must contain between two and ten valid hex values" do
    palette = palettes(:saved)
    [ [], [ "#123456" ], Array.new(11, "#123456"), [ "#123456", "<script>" ], [ nil, "#abcdef" ] ].each do |codes|
      palette.hex_codes = codes
      assert_not palette.valid?, "Accepted invalid colors: #{codes.inspect}"
    end
    palette.hex_codes = [ "123456", "#ABCDEF" ]
    assert palette.valid?
  end
end
