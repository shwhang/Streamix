import { connect } from 'react-redux';

import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { receiveAllProfiles } from '../../actions/profile_actions';

const mapStateToProps = ({genres, profiles}) => ({
    genres: genres.allGenres,
    currentProfile: profiles.currentProfile
})

const mapDispatchToProps = (dispatch, ownProps) => {
  // TODO: CODEREVIEW for logout
  return {
    logout: () => dispatch(logout()).then(() => {
      dispatch(receiveAllProfiles([]))
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (NavBar);
