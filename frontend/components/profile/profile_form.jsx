import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.form = {
      title: "",
      blurb: "",
      buttons: ""
    }
  }

  renderAddButtons(){
    return (
      <article className="profile-form-buttons">
        <Link to="/profiles">Continue</Link>
        <Link to="/profiles">Cancel</Link>
      </article>
    )
  }

  renderEditButtons(){
    return (
      <article className="profile-form-buttons">
        <Link to="/profiles">Save</Link>
        <Link to="/profiles">Cancel</Link>
        <Link to="/profiles">Delete Profile</Link>
      </article>
    )
  }

  renderFormDetails(){
    if (this.props.path === "/manage/add") {
      this.form = {
        title: "Add Profile",
        blurb: "Add a profile for another person watching Streamix.",
        buttons: this.renderAddButtons()
      }
    } else {
      this.form = {
        title: "Edit Profile",
        blurb: "",
        buttons: this.renderEditButtons()
      }
    }
  }

  render() {
    this.renderFormDetails();

    return (
      <div className="profile-form-container">
        <NavBarContainer />

        <form className="profile-form">
          <h1 className="profile-form-title">{ this.form.title }</h1>
          <p className="profile-form-blurb">{ this.form.blurb }</p>

          <article className="profile-form-details">
            <div className="avatar-section"></div>
          </article>

          { this.form.buttons }

        </form>
      </div>
    )
  }
}

export default ProfileForm;
