import * as APIUtil from '../util/profile_api_util';

export const RECEIVE_ALL_PROFILES = "RECEIVE_ALL_PROFILES";
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
