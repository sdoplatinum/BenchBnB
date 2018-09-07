import { createUser, loginUser, logoutUser } from '../util/api_util.js';

export const RECEIVECURRENTUSER = "RECEIVECURRENTUSER";
export const LOGOUTCURRENTUSER = "LOGOUTCURRENTUSER";
export const RECEIVESESSIONERRORS = "RECEIVESESSIONERRORS";
// export const SIGNUP = "SIGNUP";

export const receiveCurrentUser = (currentUser) => {
  return ({
    type: RECEIVECURRENTUSER,
    user: currentUser
  });
};

export const logoutCurrentUser = () => {
  return ({
    type: LOGOUTCURRENTUSER,
  });
};

export const receiveSessionErrors = (errors) => {
    return ({
      type: RECEIVEERRORS,
      errors
    });
};

export const login = user => {
  return dispatch => {
     loginUser(user).then(
       (user) => dispatch(receiveCurrentUser(user)),
       (errors) => dispatch(receiveSessionErrors(errors))
     );
  };
};

export const logout = () => {
  return dispatch => {
     logoutUser().then(() => dispatch(logoutCurrentUser()));
  };
};

export const signup = user => {
  return dispatch => {
     createUser(user).then(
       (user) => dispatch(receiveCurrentUser(user)),
       (errors) => dispatch(receiveSessionErrors(errors))
     );
  };
};
