import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render () {
    const currentUser = this.props.currentUser;
    if (currentUser){
      return (
        <div>
          <h2>Welcome {currentUser.username}!</h2>
          <button onClick={this.handleClick}>Log Out!</button>
        </div>
      );
    }else{
      return (
      <div>
         <Link to="/signup">SIGN UP</Link>
         <br/>
         <Link to="/login">LOG IN</Link>
      </div>
      );
    }
  }
}

export default Greeting;
