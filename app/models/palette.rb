class Palette < ApplicationRecord
  belongs_to :user, optional: true
end
