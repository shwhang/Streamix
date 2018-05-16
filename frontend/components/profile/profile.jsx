import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import LibraryContainer from '../library/library_container';
import LoadingSpinner from '../spinner/loading_spinner';

import Footer from '../home/footer';


//PROFILES VIEW will hold the navbar with all profiles
//render the library and pass in the profile likes to the library

class Profile extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      spinner: null
    }
  }

  componentWillMount(){
    // debugger
    if(this.props.genres.length === 0 || this.props.currentProfile === null) {
      this.renderLoadingSpinner(true);
    }

    let profileId = parseInt(this.props.match.params.id);
    this.props.requestCurrentProfile(profileId);
    this.props.requestAllProfiles()
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.id !== nextProps.match.params.id){
      let profileId = parseInt(nextProps.match.params.id);
      this.props.requestCurrentProfile(profileId);
    }

    if(nextProps.genres.length !== 0 && nextProps.allProfiles.length !== 0) {

      this.renderLoadingSpinner(false);
    }
  }

  renderLoadingSpinner(bool) {
    if(bool){
      this.setState({
        spinner: (<LoadingSpinner />)
      })
    } else {
      this.setState({
        spinner: null
      })
    }
  }

  render(){
    // debugger
    if(this.state.spinner !== null) {
      return (
        this.state.spinner
      );
    } else {
      return (
        <div>
          <NavBarContainer path={this.props.match.url} allProfiles={this.props.allProfiles} currentProfile={this.props.currentProfile}/>


          <LibraryContainer />

          <Footer />

        </div>
      )
    }
  }
}

export default Profile;
