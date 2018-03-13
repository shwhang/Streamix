class CreateMedia < ActiveRecord::Migration[5.0]
  def change
    create_table :media do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.string :mpaa_rating, null: false
      t.string :description, null: false
      t.boolean :has_episodes, null: false
      t.integer :genre_id, null: false
      t.integer :playlist_id, null: false

      t.timestamps
    end

    add_index :media, :genre_id
    add_index :media, :playlist_id
    add_foreign_key :media, :genres
    add_foreign_key :media, :playlists
  end
end
