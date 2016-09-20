class Project < ApplicationRecord
  has_many :member_project
  has_many :member, through: :member_project
end
