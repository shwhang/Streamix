import { connect } from 'react-redux';
import ProfileManagement from './profile_management';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispath, { location }) => {
  return {
    path: location.pathname,
  }
}

export default withRouter(connect(
  null,
  mapDispatchToProps
) (ProfileManagement));
