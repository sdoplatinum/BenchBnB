import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
//import { createBlake, loginBlake, logout } from './util/api_util.js';

import configureStore from './store/store.js';
import { receiveCurrentUser, logoutCurrentUser, login, logout, signup } from './actions/session_actions';
window.signup = signup;
window.login = login;
window.logout = logout;

const store = configureStore();

window.getState = store.getState;
window.dispatch = store.dispatch;


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
