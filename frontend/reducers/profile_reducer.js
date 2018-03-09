import merge from 'lodash/merge';

import {
  RECEIVE_ALL_AVATARS,
  RECEIVE_ALL_PROFILES,
  RECEIVE_CURRENT_PROFILE,
  REMOVE_PROFILE
} from '../actions/profile_actions';

const _nullProfiles = Object.freeze({
  allProfiles: [],
  avatars: [],
  currentProfile: {id: null, name: "", avatar_url: ""}
})

const profilesReducer = (state = _nullProfiles, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_PROFILES:
      const allProfiles = action.profiles;
      return merge({}, _nullProfiles, { allProfiles: allProfiles });
    case RECEIVE_CURRENT_PROFILE:
      const profile = action.profile;
      return merge({}, _nullProfiles, {
        allProfiles: state.allProfiles,
        currentProfile: profile,
        avatars: state.avatars
      });
    case RECEIVE_ALL_AVATARS:
      const avatars = action.avatars;
      return merge({}, _nullProfiles, { avatars });
    case REMOVE_PROFILE:
      const newProfiles = state.allProfiles.filter((profile) => {
        return profile.id !== action.currentProfile.id
      });
      return merge({}, _nullProfiles, { allProfiles: newProfiles, avatars: state.avatars})
    default:
      return state;
  }
}

export default profilesReducer;
