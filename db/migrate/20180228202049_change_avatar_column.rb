class ChangeAvatarColumn < ActiveRecord::Migration[5.0]
  def change
    remove_attachment :profiles, :avatar
    add_column :profiles, :avatar_id, :integer
    add_index :profiles, [:avatar_id]
  end
end
