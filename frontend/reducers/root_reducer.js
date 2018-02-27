import { combineReducers } from 'redux';

import session from './session_reducer';
import profiles from './profile_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
  session,
  profiles,
  errors,
})

export default rootReducer;
