export const fetchProfiles = (user_id) => {

  return $.ajax({
    method: 'GET',
    url: 'api/profiles'
  })
}
