import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { withRouter } from 'react-router-dom';
import { requestAllAvatars,
         requestCurrentProfile,
         createProfile,
         updateProfile,
         deleteProfile
} from '../../actions/profile_actions'


export const mapStateToProps = ({ profiles }) => (
  {
    avatars: profiles.avatars,
    defaultAvatar: profiles.avatars[0],
    currentProfile: profiles.currentProfile
  }
)

export const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname;
  const processForm = (formType === "/manage/add") ? createProfile : updateProfile;
  debugger
  return {
    path: location.pathname,
    requestAllAvatars: () => dispatch(requestAllAvatars()),
    requestCurrentProfile: (profileId) => dispatch(requestCurrentProfile(profileId)),
    processForm: (profile) => dispatch(processForm(profile)),
    deleteProfile: (profile) => dispatch(deleteProfile(profile))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
) (ProfileForm));
