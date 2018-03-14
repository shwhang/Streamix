# == Schema Information
#
# Table name: videos
#
#  id         :integer          not null, primary key
#  media_id   :integer          not null
#  episode_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Video < ApplicationRecord
  belongs_to :episode
  belongs_to :medium
end
