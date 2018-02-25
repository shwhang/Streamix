import { connect } from 'react-redux';
import ProfileIndex from './profile_index';
import { withRouter } from 'react-router-dom';
import {} from 'profile_actions';

const mapDispatchToProps = (dispath, { location }) => {
  return {
    path: location.pathname,
  }
}

export default withRouter(connect(
  null,
  mapDispatchToProps
) (ProfileIndex));
