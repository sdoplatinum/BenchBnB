import React from 'react';
import GreetingContainer from './greeting_container';
import { Route } from 'react-router-dom';
import LoginForm from './login_form';
import SignUpForm from './signup_form';
import AuthRoute from './../util/route_util'


const  App = () => {
  return (
    <div>
      <h1>Bench BnB</h1>
      <Route path='/' component={GreetingContainer} />
      <AuthRoute path='/login' component={LoginForm} />
      <AuthRoute path='/signup' component={SignUpForm} />
    </div>
  );
};

export default App;
