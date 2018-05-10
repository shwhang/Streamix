import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestAllProfiles } from '../../actions/profile_actions'
import GenreShow from './genre_show'

export const mapStateToProps = ({genres, profiles}) => ({
  allGenres: genres.allGenres,
  currentProfile: profiles.currentProfile,
  allProfiles: profiles.allProfiles
})

export const mapDispatchToProps = (dispatch, ownProps) => ({
  requestAllProfiles: () => {
    return dispatch(requestAllProfiles())
  }
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GenreShow)
)
