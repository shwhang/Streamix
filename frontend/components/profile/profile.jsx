import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import LibraryContainer from '../library/library_container';

import Footer from '../home/footer';


//PROFILES VIEW will hold the navbar with all profiles
//render the library and pass in the profile likes to the library

class Profile extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    let profileId = parseInt(this.props.match.params.id);
    this.props.requestCurrentProfile(profileId);
    this.props.requestAllProfiles();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.id !== nextProps.match.params.id){
      let profileId = parseInt(nextProps.match.params.id);
      this.props.requestCurrentProfile(profileId);
    }
  }

  render(){

    return (
      <div>
        <NavBarContainer path={this.props.match.url} allProfiles={this.props.allProfiles} currentProfile={this.props.currentProfile}/>


        <LibraryContainer />

        <Footer />
      </div>
    )
  }
}

export default Profile;
