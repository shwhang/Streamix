class CreateStructure < ActiveRecord::Migration[5.0]
  def change
    create_table "avatars", force: true do |t|
      t.string   "name",               null: false
      t.datetime "created_at",         null: false
      t.datetime "updated_at",         null: false
      t.string   "image_file_name"
      t.string   "image_content_type"
      t.integer  "image_file_size"
      t.datetime "image_updated_at"
    end

    create_table "episodes", force: true do |t|
      t.string   "title",          null: false
      t.string   "description",    null: false
      t.integer  "episode_number", null: false
      t.integer  "medium_id",      null: false
      t.datetime "created_at",     null: false
      t.datetime "updated_at",     null: false
      t.index ["medium_id"], name: "index_episodes_on_medium_id"
    end

    create_table "genres", force: true do |t|
      t.string   "name",       null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.index ["name"], name: "index_genres_on_name", unique: true
    end

    create_table "media", force: true do |t|
      t.string   "title",        null: false
      t.integer  "year",         null: false
      t.string   "mpaa_rating",  null: false
      t.string   "description",  null: false
      t.boolean  "has_episodes", null: false
      t.integer  "genre_id",     null: false
      t.integer  "playlist_id",  null: false
      t.datetime "created_at",   null: false
      t.datetime "updated_at",   null: false
      t.index ["genre_id"], name: "index_media_on_genre_id"
      t.index ["playlist_id"], name: "index_media_on_playlist_id"
    end

    create_table "profiles", force: true do |t|
      t.string   "name",       null: false
      t.integer  "user_id",    null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.integer  "avatar_id"
      t.index ["avatar_id"], name: "index_profiles_on_avatar_id"
      t.index ["user_id"], name: "index_profiles_on_user_id"
    end

    create_table "users", force: true do |t|
      t.string   "email",           null: false
      t.string   "password_digest", null: false
      t.string   "session_token",   null: false
      t.datetime "created_at",      null: false
      t.datetime "updated_at",      null: false
      t.index ["email"], name: "index_users_on_email", unique: true
      t.index ["session_token"], name: "index_users_on_session_token", unique: true
    end

    create_table "videos", force: true do |t|
      t.integer  "medium_id",               null: false
      t.integer  "episode_id",              null: false
      t.datetime "created_at",              null: false
      t.datetime "updated_at",              null: false
      t.string   "video_url"
      t.string   "thumbnails", default: "", null: false
      t.index ["episode_id"], name: "index_videos_on_episode_id"
      t.index ["medium_id"], name: "index_videos_on_medium_id"
    end
  end
end
