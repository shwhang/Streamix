import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
    debugger
  }

  render(){
    return (
      <nav>
        <h1>Streamix</h1>
      <button onClick={this.props.logout}>Log out</button>
      <Link to="/login">Sign In</Link>
      </nav>
    )
  }
}

export default NavBar;
