import merge from 'lodash/merge';
import { combineReducers } from 'redux';

import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const _nullErrors = Object.freeze({
  session: [],
})

const errorsReducer = ( state = _nullErrors, action ) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return merge({}, _nullErrors, action.errors);
    default:
      return state;
  }
}

export default errorsReducer;
