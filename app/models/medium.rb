# == Schema Information
#
# Table name: media
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  year         :integer          not null
#  mpaa_rating  :string           not null
#  description  :string           not null
#  has_episodes :boolean          not null
#  genre_id     :integer          not null
#  playlist_id  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Medium < ApplicationRecord
  belongs_to :genre
  has_many :episodes
  has_many :videos
end
