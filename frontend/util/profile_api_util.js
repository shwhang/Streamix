export const fetchAvatars = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/avatars'
  })
}


export const fetchProfiles = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/profiles'
  })
}

export const fetchOneProfile = (profile_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/profiles/${profile_id}`
  })
}
