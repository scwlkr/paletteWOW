class Palette < ApplicationRecord
  belongs_to :user

  validates :name, length: { maximum: 120 }
  validate :valid_palette_colors

  private

  def valid_palette_colors
    unless hex_codes.is_a?(Array) && hex_codes.length.between?(2, 10) &&
        hex_codes.all? { |hex| hex.is_a?(String) && hex.match?(/\A#?[0-9a-f]{6}\z/i) }
      errors.add(:hex_codes, "must contain 2 to 10 six-digit hex colors")
    end
  end
end
