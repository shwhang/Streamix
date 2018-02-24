import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { withRouter } from 'react-router-dom';

export const mapStateToProps = (state) => (
  {

  }
)

export const mapDispatchToProps = (dispatch, ownProps) => ({
  path: ownProps.location.pathname
})

export default withRouter(connect(
  null,
  mapDispatchToProps
) (ProfileForm));
