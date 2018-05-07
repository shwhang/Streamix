import * as APIUtil from '../util/genre_api_util';

export const RECEIVE_ALL_GENRES = 'RECEIVE_ALL_GENRES';


export const receiveAllGenres = (genres) => {
  return ({
    type: RECEIVE_ALL_GENRES,
    genres
  })
}

export const requestAllGenres = () => dispatch => {
  return APIUtil.fetchAllGenres().then (genres => {
    return dispatch(receiveAllGenres(genres))
  })
}
