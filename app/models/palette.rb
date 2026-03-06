class Palette < ApplicationRecord
  belongs_to :user, optional: true
  has_many :colors, dependent: :destroy
end
