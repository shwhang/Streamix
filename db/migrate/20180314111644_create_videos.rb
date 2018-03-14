class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.integer :media_id, null: false
      t.integer :episode_id, null: false

      t.timestamps
    end

    add_index :videos, :media_id
    add_index :videos, :episode_id
    add_foreign_key :videos, :media
    add_foreign_key :videos, :episodes
  end
end
