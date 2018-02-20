import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    logout: () => dispatch(logout()),
  }
)

export default connect(
  null,
  mapDispatchToProps
) (NavBar);
