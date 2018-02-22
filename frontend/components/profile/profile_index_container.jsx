import { connect } from 'react-redux';
import ProfileIndex from './profile_index';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispath, { location }) => {
  return {
    path: location.pathname,
  }
}

export default withRouter(connect(
  null,
  mapDispatchToProps
) (ProfileIndex));
