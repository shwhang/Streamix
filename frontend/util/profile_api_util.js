export const fetchProfiles = (user_id) => {
  debugger
  return $.ajax({
    method: 'GET',
    url: 'api/profiles'
  })
}
