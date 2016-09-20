class Rater < ApplicationRecord
  has_many :granding, dependent: :destroy
end
