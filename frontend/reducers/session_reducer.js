import { RECEIVECURRENTUSER,LOGOUTCURRENTUSER } from '../actions/session_actions';

function sessionsReducer(state = { current_user_id: null }, action) {
  switch (action.type) {
    case RECEIVECURRENTUSER:
      return {
        currentUserId: action.user.id,
      };
    case LOGOUTCURRENTUSER:
      return {
        currentUserId: null,
      };
    default:
      return state;
  }
}

export default sessionsReducer;
