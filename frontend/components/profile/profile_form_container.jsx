import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { withRouter } from 'react-router-dom';
import { requestAllAvatars,
         requestCurrentProfile,
} from '../../actions/profile_actions'


export const mapStateToProps = ({ profiles }) => (
  {
    avatars: profiles.avatars,
    defaultAvatar: profiles.avatars[0],
    currentProfile: profiles.currentProfile
  }
)

export const mapDispatchToProps = (dispatch, ownProps) => ({
  path: ownProps.location.pathname,
  requestAllAvatars: () => dispatch(requestAllAvatars()),
  requestCurrentProfile: (profileId) => dispatch(requestCurrentProfile(profileId))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
) (ProfileForm));
