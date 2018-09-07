import { RECEIVECURRENTUSER,LOGOUTCURRENTUSER } from '../actions/session_actions';

function sessionsReducer(state = { current_user_id: null }, action) {
  switch (action.type) {
    case RECEIVECURRENTUSER:
      return {
        current_user_id: action.user.id,
      };
    case LOGOUTCURRENTUSER:
      return {
        current_user_id: null,
      };
    default:
      return state;
  }
}

export default sessionsReducer;
