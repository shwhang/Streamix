# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  profile_id :integer          not null
#  medium_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class PlaylistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
