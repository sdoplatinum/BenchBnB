import React from 'react';
import GreetingContainer from './greeting_container';
import { Route } from 'react-router-dom';
import LoginForm from './login_form';
import SignUpForm from './signup_form';
import AuthRoute from './../util/route_util';
import SearchContainer from './search_container';


const  App = () => {
  return (
    <div>
      <header>
        <h1>Bench BnB</h1>
        <GreetingContainer/>
      </header>

      <AuthRoute path='/login' component={LoginForm} />
      <AuthRoute path='/signup' component={SignUpForm} />
      <Route exact path='/' component={SearchContainer} />
    </div>
  );
};

export default App;
