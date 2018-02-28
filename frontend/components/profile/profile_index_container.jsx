import { connect } from 'react-redux';
import ProfileIndex from './profile_index';
import { withRouter } from 'react-router-dom';
import { requestAllProfiles } from '../../actions/profile_actions';

const mapStateToProps = (({session, profiles}) => {
  return {
    allProfiles: profiles.allProfiles,
    user: session.currentUser.id
  }
})

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    path: location.pathname,
    requestAllProfiles: user_id => dispatch(requestAllProfiles(user_id))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
) (ProfileIndex));
