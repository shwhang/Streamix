import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({ session, errors }) => (
  {loggedIn: Boolean(session.currentUser)}
)

const mapDispatchToProps = (dispatch, {location} ) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === '/login' ? login : signup);

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
