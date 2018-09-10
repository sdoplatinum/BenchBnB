import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
//import { createBlake, loginBlake, logout } from './util/api_util.js';

import configureStore from './store/store.js';
import { receiveCurrentUser, logoutCurrentUser, login, logout, signup } from './actions/session_actions';
window.signup = signup;
window.login = login;
window.logout = logout;




document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (Boolean(window.currentUser)) {
    const preLoadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: {currentUserId: window.currentUser.id}
    };
    store = configureStore(preLoadedState);
  } else {
    store = configureStore();
  }

  // TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);

});
