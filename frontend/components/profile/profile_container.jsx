import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';

import { requestCurrentProfile, requestAllProfiles } from '../../actions/profile_actions';

export const mapStateToProps = () => {};

export const mapDispatchToProps = (dispatch, ownProps) => {
  requestCurrentProfile: (profile_id) => dispatch(requestCurrentProfile(profile_id))
};

export default withRouter(connect(null, null)(Profile))
