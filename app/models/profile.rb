# == Schema Information
#
# Table name: profiles
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Profile < ApplicationRecord
  validates :name, :user_id, presence: true

  belongs_to :user
end
