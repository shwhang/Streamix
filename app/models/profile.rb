# == Schema Information
#
# Table name: profiles
#
#  id                  :integer          not null, primary key
#  name                :string           not null
#  user_id             :integer          not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class Profile < ApplicationRecord
  validates :name, :user_id, presence: true

  belongs_to :user

  has_attached_file :avatar, default_url: "<%= asset_path('/avatars/default_avatar.png')%>"
  validates_attachment_content_type  :avatar, content_type: /\Aimage\/.*\z/
end
