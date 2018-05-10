import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenreShow from './genre_show'

export const mapStateToProps = ({genres}) => ({
  allGenres: genres.allGenres
})

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(GenreShow)
)
