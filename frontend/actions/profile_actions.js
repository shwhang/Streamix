import * as APIUtil from '../util/profile_api_util';

export const RECEIVE_ALL_AVATARS = "RECEIVE_ALL_AVATARS";
export const RECEIVE_ALL_PROFILES = "RECEIVE_ALL_PROFILES";
export const RECEIVE_CURRENT_PROFILE = "RECEIVE_CURRENT_PROFILE";
export const REMOVE_PROFILE = "REMOVE_PROFILE";
export const RECEIVE_PROFILE_ERRORS = "RECEIVE_PROFILE_ERRORS";


export const receiveProfileErrors = errors => ({
  type: RECEIVE_PROFILE_ERRORS,
  errors
})

export const receiveAllProfiles = (profiles) => {
  return ({
    type: RECEIVE_ALL_PROFILES,
    profiles
  })
}

export const receiveAllAvatars = (avatars) => {
  return ({
    type: RECEIVE_ALL_AVATARS,
    avatars
  })
}

export const receiveCurrentProfile = (profile) => {
  return ({
    type: RECEIVE_CURRENT_PROFILE,
    profile
  })
}

export const removeProfile = (profile) => {
  return ({
    type: REMOVE_PROFILE,
    profile
  })
}


export const requestAllProfiles = () => dispatch => {
  return APIUtil.fetchProfiles().then (profiles => {
      return dispatch(receiveAllProfiles(profiles))
    }, err => {
      return dispatch(receiveProfileErrors(err.responseJSON))
    }
  )
}

export const requestAllAvatars = () => dispatch => {
  return APIUtil.fetchAvatars().then (avatars => {
    return dispatch(receiveAllAvatars(avatars))
  })
}

export const requestCurrentProfile = (profile_id) => dispatch => {
  return APIUtil.fetchOneProfile(profile_id).then (profile => {
    return dispatch(receiveCurrentProfile(profile))
  })
}

export const createProfile = (profile) => dispatch => {
  return APIUtil.createProfile(profile).then (profile => {
    return dispatch(receiveCurrentProfile(profile))
  })
}

export const updateProfile = (profile) => dispatch => {
  return APIUtil.updateProfile(profile).then( profile => {
    return dispatch(receiveCurrentProfile(profile))
  })
}

export const deleteProfile = (profile) => dispatch => {
  return APIUtil.destroyProfile(profile).then((profile) => {
    return dispatch(removeProfile(profile));
  })
}
