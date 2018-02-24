import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class ProfileIndex extends React.Component{
  constructor(props){
    super(props)

    this.details = {
      title: "",
      buttonText: "",
      buttonLink: ""
    }
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

    return (
      <div className="profiles-wrapper">
        <NavBarContainer path={this.props.path}/>

        <div className="profiles-index">
          <h1 className="profiles-index-title">
            {this.details.title}
          </h1>

          <div className="profile-options">

            <Link to="/manage/add" className="profile-link">
              <div className="add-profile-icon">
              </div>
              <p>Add Profile</p>
            </Link>
          </div>


          <Link to={this.details.buttonLink} className="profile-manage-button">
            {this.details.buttonText}
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(ProfileIndex);
