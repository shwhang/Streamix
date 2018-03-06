json.id profile.id
json.name profile.name
json.avatar_id profile.avatar_id
json.avatar_url asset_path(Avatar.find(profile.avatar_id).image.url)
# json.avatar_url asset_path(profile.avatar.url)
