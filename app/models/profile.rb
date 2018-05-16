# == Schema Information
#
# Table name: profiles
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  avatar_id  :integer
#

class Profile < ApplicationRecord
  validates :name, :user_id, presence: true

  belongs_to :user
  has_one :avatar
  has_one :playlist
end
