class AddUrlToVideos < ActiveRecord::Migration[5.0]
  def change
    add_column :videos, :video_url, :string
  end
end
