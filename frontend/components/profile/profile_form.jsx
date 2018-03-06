import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholder: "",
      name: "",
      avatarId: "",
      avatarUrl: ""
    }

    this.form = {
      title: "",
      blurb: "",
      buttons: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  componentWillMount(){
    this.props.requestAllAvatars();

    if (this.props.path !== '/manage/add') {
      let slashIndex = this.props.path.lastIndexOf('/') + 1;
      let profileId = parseInt(this.props.path.slice(slashIndex));

      this.props.requestCurrentProfile(profileId).then(({profile}) => {
        this.setState({
          name: profile.name,
          avatarId: profile.avatar_id,
          avatarUrl: profile.avatar_url
        })
      })
    }

  }

  componentWillReceiveProps(nextProps){
    if (this.props.defaultAvatar !== nextProps.defaultAvatar && this.props.path === '/manage/add') {
      this.setState({
        placeholder: "Add Profile",
        avatarId: nextProps.defaultAvatar.id,
        avatarUrl: nextProps.defaultAvatar.image
      })
    }
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    })
  }

  renderFormDetails(){
    if (this.props.path === "/manage/add") {
      this.form = {
        title: "Add Profile",
        blurb: "Add a profile for another person watching Streamix.",
        updateButonText: "Continue"
      }
    } else {
      this.form = {
        title: "Edit Profile",
        blurb: "",
        updateButonText: "Save",
        deleteButton: (<button to="/profiles" className="profile-delete-button" onClick={this.handleSubmitDelete}>Delete Profile</button>)
      }
    }
  }

  renderButtons(){
    return (
      <article className="profile-form-buttons">
        <input type="submit" value={this.form.updateButonText} className="profile-update-button"/>
        <Link to="/profiles" className="profile-cancel-button">Cancel</Link>
        { this.form.deleteButton }
      </article>
    )
  }

  handleSubmit(e){
    e.preventDefault();

    let profileData;

    if(this.props.path === "/manage/add"){
      profileData = {
        name: this.state.name,
        avatar_id: this.state.avatarId
      }
    } else {
      profileData = {
        id: this.props.currentProfile.id,
        name: this.state.name,
        avatar_id: this.state.avatarId
      }
    }

    const profile = Object.assign({}, profileData);
    this.props.processForm(profile).then(() => {
      this.props.history.push('/profiles')
    });
  }

  handleSubmitDelete(e){
    e.preventDefault();

    this.props.deleteProfile(this.props.currentProfile).then(() => {
      this.props.history.push('/profiles');
    })
  }

  updateAvatar(e){
    e.preventDefault();

    let avatarId = parseInt(e.target.alt.slice(7));
    let avatarUrl = this.props.avatars.filter((avatar) => {
      return avatar.id === avatarId
    })[0];

    this.setState({
      avatarId: avatarId,
      avatarUrl: avatarUrl.image
    });
  }

  avatarModalBox(){
    let avatars = this.props.avatars;

    const avatarItems = avatars.map((avatar, i) => {
      return <img
        src={avatar.image}
        alt={`avatar-${avatar.id}`}
        key={`avatar-${i}`}
        className="avatar-select-img"
        onClick={this.updateAvatar}
      />
    })

    return(
      <div className="avatar-modal-box">
        {avatarItems}
      </div>
    )
  }

  renderAvatarModalBox(e){
    e.preventDefault();

    const avatarModalBox = document.getElementsByClassName('avatar-modal-box')[0];
    const avatarModalBoxStyle = avatarModalBox.style.visibility;

    avatarModalBox.style.visibility = (avatarModalBoxStyle === "visible" ? "hidden" : "visible");
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
              <div className="default-avatar-container">
                <img src={this.state.avatarUrl} alt="default-avatar-img" className="default-avatar-img"/>
                <button className="edit-avatar-icon" onClick={this.renderAvatarModalBox}>
                </button>
              </div>

              { this.avatarModalBox() }
            </div>

            <input type="text"
              placeholder={this.state.placeholder}
              value={this.state.name}
              onChange={this.update('name')}
              className="profile-name-textbox"
            />
          </article>

          { this.renderButtons() }

        </form>
      </div>
    )
  }
}

export default ProfileForm;
