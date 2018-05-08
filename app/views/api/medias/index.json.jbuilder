json.array! @medias do |medium|
  json.id medium[:medium][:id]
  json.title medium[:medium][:title]
  json.year medium[:medium].year
  json.mpaa_rating medium[:medium].mpaa_rating
  json.description medium[:medium].description
  json.has_episodes medium[:medium].has_episodes
  json.genre_id medium[:medium].genre_id
  json.playlist_id medium[:medium].playlist_id
  json.video medium[:video]
end




# :id, :title, :year, :mpaa_rating, :description, :has_episodes, :genre_id, :playlist_id, :video
