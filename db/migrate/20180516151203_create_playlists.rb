class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.integer :profile_id, null: false
      t.integer :medium_id

      t.timestamps
    end

    add_index :playlists, :profile_id
    add_index :playlists, :medium_id
  end
end
