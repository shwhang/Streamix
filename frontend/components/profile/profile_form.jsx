import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ""
    }

    this.form = {
      title: "",
      blurb: "",
      buttons: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    })
  }

  renderAddButtons(){
    return (
      <article className="profile-form-buttons">
        <input type="submit" value="Continue"/>
        <Link to="/profiles">Cancel</Link>
      </article>
    )
  }

  renderEditButtons(){
    return (
      <article className="profile-form-buttons">
        <input type="submit" value="Save"/>
        <Link to="/profiles">Cancel</Link>
        <button to="/profiles" onClick={this.submitDelete}>Delete Profile</button>
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

  handleSubmit(e){
    e.preventDefault();
    // const profile = Object.assign({}, this.state);
  }

  avatarModalBox(){
   let avatars = {
      avatar1: "https://s3.amazonaws.com/streamix-dev/profiles/avatars/000/000/014/original/avatar8.png",
      avatar2: "https://s3.amazonaws.com/streamix-dev/profiles/avatars/000/000/015/original/avatar4.png",
      // avatar3: "",
      // avatar4: "",
      // avatar5: "",
      // avatar6: "",
      // avatar7: "",
      // avatar8: "",
      // avatar9: ""
    }

    const avatarItems = Object.values(avatars).map((avatar, i) => {
      return <img
        src={avatar}
        alt={`avatar${i}`}
        key={`avatar-${i}`}
        className="avatar-select-img"
      />
    })

    return(
      <div className="avatar-modal-box">
        {avatarItems}
      </div>
    )
  }
  render() {
    this.renderFormDetails();

    return (
      <div className="profile-form-container">
        <NavBarContainer />

        <form className="profile-form" onSubmit={this.handleSubmit}>
          <h1 className="profile-form-title">{ this.form.title }</h1>
          <p className="profile-form-blurb">{ this.form.blurb }</p>

          <article className="profile-form-details">
            <div className="avatar-section">
              <div className="default-avatar"></div>
              {this.avatarModalBox()}
            </div>

            <input type="text"
              placeholder="Add Profile"
              value={this.state.name}
              onChange={this.update('name')}
              className="profile-name-textbox"
            />
          </article>

          { this.form.buttons }

        </form>
      </div>
    )
  }
}

export default ProfileForm;
