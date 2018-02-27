import * as APIUtil from '../util/session_api_util';
import { receiveAllProfiles } from './profile_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => {
  return APIUtil.signup(user).then( user => {
      return dispatch(receiveCurrentUser(user))
    }, err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    )
  )
};

export const login = user => dispatch => {
  return APIUtil.login(user).then( user => {
      return dispatch(receiveCurrentUser(user))
    }, err => {
      return dispatch(receiveSessionErrors(err.responseJSON))
    }
  )
};

export const logout = () => dispatch => {
  return APIUtil.logout().then((user) => (
    dispatch(receiveCurrentUser(null))
  ))
};
