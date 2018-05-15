json.extract! @genres do |genre|
  json.id genre.id
  json.name genre.name
  json.media genre.media do |medium|
    json.medium medium
    json.video medium.video
  end
end
