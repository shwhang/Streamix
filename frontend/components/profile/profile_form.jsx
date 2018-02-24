import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.form = {}
  }

  renderEditForm(){
    this.form = (
      <form className="profile-form">
        <h1>Edit Profile</h1>
        <p>Add a profile for another person watching Streamix.</p>

        <article className="profile-form-details">
          <div className="avatar-section"></div>


        </article>


        <article className="profile-form-buttons">

          <Link to="/profiles">Cancel</Link>
        </article>
      </form>
    )
  }

  renderAddForm(){
    this.form = (
      <form className="profile-form">
        <h1>Add Profile</h1>
        <p>Add a profile for another person watching Streamix.</p>

        <article className="profile-form-details">
          <div className="avatar-section"></div>


        </article>


        <article className="profile-form-buttons">

          <Link to="/profiles">Cancel</Link>
        </article>
      </form>
    )
  }

  render() {
    if (this.props.path === "/manage/add") {
      this.renderAddForm();
    } else {
      this.renderEditForm();
    }

    return (
      <div>
        <NavBarContainer />

        {this.form}
      </div>
    )
  }
}

export default ProfileForm;
