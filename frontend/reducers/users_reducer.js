import { RECEIVECURRENTUSER } from '../actions/session_actions';
import { merge } from 'lodash';

function usersReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVECURRENTUSER:
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
}

export default usersReducer;
