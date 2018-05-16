class AddKeysToPlaylist < ActiveRecord::Migration[5.0]
  def change
    add_foreign_key :playlists, :profiles
    add_foreign_key :playlists, :medias
  end
end
