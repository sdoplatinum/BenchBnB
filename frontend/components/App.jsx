import React from 'react';
import GreetingContainer from './greeting_container';
import { Route } from 'react-router-dom';
import LoginForm from './login_form';
import SignUpForm from './signup_form';
import AuthRoute from './../util/route_util';
import BenchIndex from './bench_index_container';


const  App = () => {
  return (
    <div>
      <header>
        <h1>Bench BnB</h1>
        <GreetingContainer/>
      </header>

      <AuthRoute path='/login' component={LoginForm} />
      <AuthRoute path='/signup' component={SignUpForm} />
      <Route exact path='/' component={BenchIndex} />
    </div>
  );
};

export default App;
