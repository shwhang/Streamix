import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';


//PROFILES VIEW will hold the navbar with all profiles
//render the library and pass in the profile likes to the library

class Profile extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <NavBarContainer />
      </div>
    )
  }
}

export default Profile;
