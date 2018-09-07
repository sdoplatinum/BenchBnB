import { RECEIVESESSIONERRORS, RECEIVECURRENTUSER } from '../actions/session_actions';

function sessionErrorsReducer(state = [], action) {
  switch (action.type) {
    case RECEIVESESSIONERRORS:
      return action.errors;
    case RECEIVECURRENTUSER:
      return [];
    default:
      return state;
  }
}
export default sessionErrorsReducer;
