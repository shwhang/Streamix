import merge from 'lodash/merge';

import { RECEIVE_ALL_GENRES } from '../actions/genre_actions';

const _nullGenres = Object.freeze({
  genres: []
})


const genresReducer = (state = _nullProfiles, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_GENRES:
      const allGenres = action.genres;
      debugger
      return merge({}, _nullProfiles, { allGenres })
    default:
      return state;
  }
}

export default genresReducer;
