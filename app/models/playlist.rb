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

class Playlist < ApplicationRecord
  belongs_to :profile
  belongs_to :medium
end
