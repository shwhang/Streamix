import { connect } from 'react-redux';
import Home from './home';
import { login } from '../../actions/session_actions';
import { requestAllGenres } from '../../actions/genre_actions'

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  allGenres: session.allGenres
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user)),
  requestAllGenres: () => {
    debugger
      return dispatch(requestAllGenres());
  },
  path: ownProps.location.pathname
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
