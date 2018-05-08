import merge from 'lodash/merge';

import { RECEIVE_ALL_GENRES } from '../actions/genre_actions';

const _nullGenres = Object.freeze({
  allGenres: []
})


const genresReducer = (state = _nullGenres, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_GENRES:
      const allGenres = action.allGenres;
      return merge({}, _nullGenres, { allGenres })
    default:
      return state;
  }
}

export default genresReducer;
