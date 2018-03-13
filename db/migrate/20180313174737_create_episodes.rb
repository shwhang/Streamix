class CreateEpisodes < ActiveRecord::Migration[5.0]
  def change
    create_table :episodes do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :episode_number, null: false
      t.integer :media_id, null: false

      t.timestamps
    end

    add_index :episodes, :media_id
    add_foreign_key :episodes, :media
  end
end
