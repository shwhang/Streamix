# == Schema Information
#
# Table name: videos
#
#  id         :integer          not null, primary key
#  medium_id  :integer          not null
#  episode_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  video_url  :string
#

require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
