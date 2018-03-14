# == Schema Information
#
# Table name: episodes
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  description    :string           not null
#  episode_number :integer          not null
#  media_id       :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Episode < ApplicationRecord
  validates :title, :description, :episode_number, presence: true
  validates :episode_number, numericality: { only_integer: true }

  belongs_to :medium
  # has_many :videos
end
