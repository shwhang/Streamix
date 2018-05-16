json.array! all_genres do |genre|
  json.id genre.id
  json.name genre.name
  json.media genre.media do |media|
    json.medium media
    json.video media.video
  end
end
