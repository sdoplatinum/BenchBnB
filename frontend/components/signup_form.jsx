import React from 'react';
import { signup } from '../actions/session_actions';
import { connect } from "react-redux";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Username</p>
        <input type="text" value={this.state.username} onChange={this.update("username")}></input>
        <p>Password</p>
        <input type="password" value={this.state.password} onChange={this.update("password")}></input>
        <button>Sign Up</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    signup: user => dispatch(signup(user)),
  });
};

export default connect(null, mapDispatchToProps)(SignUpForm);
