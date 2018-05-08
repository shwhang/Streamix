import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Library from './library';

export const mapStateToProps = ({genres}) => ({
  allGenres: genres.allGenres
});

export const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default withRouter(connect(
  mapStateToProps,
  null
)(Library))
