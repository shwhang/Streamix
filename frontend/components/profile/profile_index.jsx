import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ProfileIndexItem from './profile_index_item';

class ProfileIndex extends React.Component{
  constructor(props){
    super(props)

    this.details = {
      title: "",
      buttonText: "",
      buttonLink: ""
    }

    props.requestAllProfiles()
  }

  componentDidUpdate() {
    //TODO: Request all Genres
    // this.props.requestAllGenres()
  }

  renderPageDetails(){
    if (this.props.path === "/profiles") {
      this.details = {
        title: "Who's watching?",
        buttonText: "Manage All Profiles",
        buttonLink: "/manage/profiles"
      }
    } else {
      this.details = {
        title: "Manage Profiles",
        buttonText: "Done",
        buttonLink: "/profiles"
      }
    }
  }

  render(){
    this.renderPageDetails();

    const profiles = this.props.allProfiles.map((profile) => {
      return <ProfileIndexItem
          key={`profile-list-item${profile.id}`}
          profile={profile}
          formType={this.props.path}
        />
    });

    return (
      <div>
        <NavBarContainer path={this.props.path}/>

      <div className="profiles-wrapper">

          <div className="profiles-index fadeInDown">
            <h1 className="profiles-index-title">
              {this.details.title}
            </h1>

            <div className="profile-options">
              { profiles }
              <Link to="/manage/add" className="profile-index-item">
                <div className="add-profile-icon avatar-container">
                </div>
                <p>Add Profile</p>
              </Link>
            </div>


            <Link to={this.details.buttonLink} className="profile-manage-button">
              {this.details.buttonText}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ProfileIndex);
