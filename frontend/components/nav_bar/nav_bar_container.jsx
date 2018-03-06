import { connect } from 'react-redux';

import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { receiveAllProfiles } from '../../actions/profile_actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()).then(() => {
      dispatch(receiveAllProfiles([]))
    })
  }
}

export default connect(
  null,
  mapDispatchToProps
) (NavBar);
