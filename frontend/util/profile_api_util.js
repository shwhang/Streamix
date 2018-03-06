export const fetchAvatars = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/avatars'
  })
}

// TODO: Remove user_id arg
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

export const createProfile = (profile) => {
  return $.ajax({
    method: 'POST',
    url: 'api/profiles',
    data: { profile }
  })
}

export const updateProfile = (profile) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/profiles/${profile.id}`,
    data: { profile }
  })
}

export const destroyProfile = (profile) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/profiles/${profile.id}`
  })
}
