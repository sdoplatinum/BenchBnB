import React from 'react';
import GreetingContainer from './greeting_container';
import { Route } from 'react-router-dom';
import LoginForm from './login_form';
import SignUpForm from './signup_form';


const  App = () => {
  return (
    <div>
      <h1>Bench BnB</h1>
      <Route path='/' component={GreetingContainer} />
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' component={SignUpForm} />
    </div>
  );
};

export default App;
