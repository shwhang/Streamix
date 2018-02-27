import merge from 'lodash/merge';

import {
  RECEIVE_ALL_PROFILES
} from '../actions/profile_actions';

const _nullProfiles = Object.freeze({
  allProfiles: [],
  currentProfile: null
})

const profilesReducer = (state = _nullProfiles, action) => {
  Object.freeze(state);
  // debugger
  switch(action.type) {
    case RECEIVE_ALL_PROFILES:
      const allProfiles = action.currentProfile;
      return merge({}, _nullProfiles, { allProfiles });
    default:
      return state;
  }
}

export default profilesReducer;
