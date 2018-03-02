import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { withRouter } from 'react-router-dom';
import { requestAllAvatars } from '../../actions/profile_actions'


export const mapStateToProps = (state) => (
  {
    avatars: state.profiles.avatars
  }
)

export const mapDispatchToProps = (dispatch, ownProps) => ({
  path: ownProps.location.pathname,
  requestAllAvatars: () => dispatch(requestAllAvatars())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
) (ProfileForm));
