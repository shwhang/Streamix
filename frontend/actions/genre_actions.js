import * as APIUtil from '../util/genre_api_util';

export const RECEIVE_ALL_GENRES = 'RECEIVE_ALL_GENRES';


export const receiveAllGenres = (allGenres) => {
  return ({
    type: RECEIVE_ALL_GENRES,
    allGenres
  })
}

export const requestAllGenres = () => dispatch => {
  return APIUtil.fetchAllGenres().then (allGenres => {
    return dispatch(receiveAllGenres(allGenres))
  })
}
