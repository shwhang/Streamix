import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestOneVideo } from '../../actions/video_actions';

import Video from './video';

export const mapStateToProps = ({genres}) => ({
  videos: genres.allGenres
})

export const mapDispatchToProps = (dispatch, ownProps) => ({
  requestOneVideo: (id) => {
    return dispatch(requestOneVideo(id));
  }
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Video))
