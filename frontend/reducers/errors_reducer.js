import merge from 'lodash/merge';

import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const _nullErrors = Object.freeze({
  sessionErrors: [],
})

const errorsReducer = ( state = _nullErrors, action ) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      const sessionErrors = action.session;
      return merge({}, { sessionErrors })
    default:
      return state;
  }
}

export default erorrsReducer;
