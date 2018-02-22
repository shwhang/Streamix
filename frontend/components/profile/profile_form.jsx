import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavBarContainer />

        <form className="profile-form">
          <h1>Add Profile</h1>
          <p>Add a profile for another person watching Streamix.</p>

          <article className="profile-form-details">
            <div classname="avatar-section"></div>

            <input type="text"
              value={}
              onChange={}
              className="profile-name-textbox"
            />

          </article>


          <article className="profile-form-buttons">

            <Link to="/profiles">Cancel</Link>
          </article>
        </form>

      </div>
    )
  }
}
