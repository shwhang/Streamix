export const fetchOneVideo = (video_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/videos/${video_id}`
  })
}
