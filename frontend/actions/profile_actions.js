import * as APIUtil from '../util/profile_api_util';

export const RECEIVE_ALL_AVATARS = "RECEIVE_ALL_AVATARS";
export const RECEIVE_ALL_PROFILES = "RECEIVE_ALL_PROFILES";
export const RECEIVE_CURRENT_PROFILE = "RECEIVE_CURRENT_PROFILE";
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


export const requestAllProfiles = user_id => dispatch => {
  return APIUtil.fetchProfiles(user_id).then (profiles => {
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
