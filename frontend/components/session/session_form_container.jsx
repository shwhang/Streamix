import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';
import { requestAllProfiles } from '../../actions/profile_actions';
import { requestAllGenres } from '../../actions/genre_actions';

const mapStateToProps = ({ session, errors }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: errors.session
  }
}

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    requestAllGenres: () => {
        return dispatch(requestAllGenres());
    },
    formType,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
