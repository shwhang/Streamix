import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(){

  }

  renderHomeNavBar(){
    return (
      <Link to="/login" className="home-sign-in-button">Sign In</Link>
    )
  }

  renderProfileNavBar(){
    return (
      <button onClick={this.props.logout}>Log out</button>
    )
  }

  render(){
    let currentNavBar;

    if(this.props.path === '/'){
      currentNavBar = this.renderHomeNavBar();
    } else if(this.props.path === "/profiles") {
      currentNavBar = this.renderProfileNavBar();
    }

    return (
      <nav className="nav-bar-wrapper">
        <h1 className="logo">
          <Link to="/">
            Streamix
          </Link>
        </h1>

        { currentNavBar }
      </nav>
    )
  }
}

export default NavBar;
