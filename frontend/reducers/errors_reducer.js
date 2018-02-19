import merge from 'lodash/merge';

import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const _nullErrors = Object.freeze({
  session: [],
})

const errorsReducer = ( state = _nullErrors, action ) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      const session = action.session;
      return merge({}, { session })
    default:
      return state;
  }
}

export default errorsReducer;
