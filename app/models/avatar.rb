# == Schema Information
#
# Table name: avatars
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Avatar < ApplicationRecord
  validates :name, presence: true

  has_attached_file :image, default_url: "<%= asset_path('/avatars/default_avatar.png')%>"
  validates_attachment_content_type  :image, content_type: /\Aimage\/.*\z/
end
