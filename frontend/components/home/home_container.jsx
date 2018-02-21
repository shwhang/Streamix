import { connect } from 'react-redux';
import Home from './home';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user)),
  path: ownProps.location.pathname
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
