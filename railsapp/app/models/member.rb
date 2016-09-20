class Member < ApplicationRecord
  has_many :granding, dependent: :destroy
  has_many :member_project
  has_many :project, through: :member_project
end
