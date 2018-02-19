import merge from 'lodash/merge';

import { receieveSessionErrors } from '../actions/sessions_action';

const _nullErrors = Object.freeze({
  sessionErrors: [],
})

const errorsReducer = ( state = _nullErrors, action ) => {
  Object.freeze(state);

  switch(action.type){
    case: RECEIVE_SESSION_ERRORS:
      const sessionErrors = action.session;
      return merge({}, { sessionErrors })
    default:
      return state;
  }
}

export default erorrsReducer;
