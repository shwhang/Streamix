import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';

const mapStateToProps = ({ session, errors }) => (

)

const mapDispatchToProps = (dispatch, {location} ) => (

)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
