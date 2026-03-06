class User < ApplicationRecord
  has_many :palettes, dependent: :destroy
end
