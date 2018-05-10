import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenreShow from './genre_show'

export const mapStateToProps = ({genres, profiles}) => ({
  allGenres: genres.allGenres,
  currentProfile: profiles.currentProfile
})

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(GenreShow)
)
