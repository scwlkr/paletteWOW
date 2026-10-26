class User < ApplicationRecord
  has_many :palettes, dependent: :destroy

  validates :email, presence: true, uniqueness: true
end
