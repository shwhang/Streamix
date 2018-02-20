import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    //TODO: Add a different view if user is loggedin
    return (
      <div>
        <NavBar />

        <div className="splash-page-section">
          <h1>See what's Next.</h1>
          <div className="splash-page-buttons">
            <Link to="">Sign Up for Free</Link>
            <Link to="">Demo Login</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
