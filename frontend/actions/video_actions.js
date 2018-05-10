import * as APIUtil from '../util/video_api_util';

export const RECEIVE_ONE_VIDEO = "RECEIVE_ONE_VIDEO";

export const receiveOneVideo = (video) => {
  return {
    type: RECEIVE_ONE_VIDEO,
    video
  }
}

export const requestOneVideo = (videoId) => dispatch => {
  return APIUtil.fetchOneVideo(videoId).then( video => {
    return dispatch(receiveOneVideo(video));
  })
}
