import merge from 'lodash/merge';

import {
  RECEIVE_ONE_VIDEO
} from '../actions/video_actions';

const _nullVideo = Object.freeze({
  video: null
})

const videosReducer = (state = _nullVideo, action) => {
  Object.freeze(state);
  debugger
  switch(action.type) {
    case RECEIVE_ONE_VIDEO:
      const video = action.video;
      return merge( {}, _nullVideo, {
        video: action.video
      })
  }
}
