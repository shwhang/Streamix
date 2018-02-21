import { connect } from 'react-redux';
import ProfileManagement from './profile_manamegement';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispath, { location }) => {
  return {
    path: location.pathname,
  }
}

export default connect(
  null,
  mapDispatchToProps
) (ProfileManagement)
