import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,

} from '../actions/session_actions';
import { REMOVE_ALL_ERRORS } from '../actions/error_actions';

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case REMOVE_ALL_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;