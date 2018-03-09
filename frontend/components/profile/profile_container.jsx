import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';

import { requestCurrentProfile, requestAllProfiles } from '../../actions/profile_actions';

export const mapStateToProps = ({ profiles }) => ({
  currentProfile: profiles.currentProfile,
  allProfiles: profiles.allProfiles
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  requestCurrentProfile: (profile_id) => dispatch(requestCurrentProfile(profile_id)),
  requestAllProfiles: () => dispatch(requestAllProfiles())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile))
