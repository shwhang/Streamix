class AddThumbnailsToVideos < ActiveRecord::Migration[5.0]
  def change
    add_column :videos, :thumbnails, :string, null: false, default: ""
  end
end
