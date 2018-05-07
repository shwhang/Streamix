import { combineReducers } from 'redux';

import session from './session_reducer';
import profiles from './profile_reducer';
import genres from './genre_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
  session,
  profiles,
  genres,
  errors,
})

export default rootReducer;
