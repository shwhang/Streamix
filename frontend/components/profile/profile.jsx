import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';


//PROFILES VIEW will hold the navbar with all profiles
//render the library and pass in the profile likes to the library

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      navbar: null
    }
  }

  componentWillMount(){
    // debugger
    let profileId = parseInt(this.props.match.params.id);
    this.props.requestAllProfiles();
    this.props.requestCurrentProfile(profileId);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.allProfiles !== nextProps.allProfiles){

    }
  }

  render(){
    return (
      <div>
        <NavBarContainer path={this.props.match.url} allProfiles={this.props.allProfiles} currentProfile={this.props.currentProfile}/>
      </div>
    )
  }
}

export default Profile;
