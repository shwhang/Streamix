import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);

    this.changeDropDownVisibility = this.changeDropDownVisibility.bind(this)
  }

  changeDropDownVisibility(e){
    e.preventDefault();

    const dropDownMenu = document.getElementsByClassName('profiles-dropdown-menu')[0];
    dropDownMenu.style.visibility = (dropDownMenu.style.visibility === "hidden" ? "visible" : "hidden")
  }

  renderHomeNavBar(){
    return (
      <Link to="/login" className="home-sign-in-button">Sign In</Link>
    )
  }


  renderProfileNavBar(){
    let profiles = this.props.allProfiles.filter((profile) => {
      return profile.id !== this.props.currentProfile.id
    })

    profiles = profiles.map((profile) => {
      return (
        <Link to={`/browse/${profile.id}`} key={`profile-list-item-${profile.id}`}>
          <li className="profile-nav-options">
            <img src={profile.avatar_url} className="profile-nav-options-avatar"/>
            <p className="profile-nav-options-name">{profile.name}</p>
          </li>
        </Link>
      )
    })

    return (
      <div className="navbar-options">
        <p>
          Browse
        </p>

        <div className="profile-options-menu">

           <div className="avatar-button" onClick={this.changeDropDownVisibility}>
             <img src={this.props.currentProfile.avatar_url} className="current-avatar-img" />
             <p className="triangle-arrow">
               &#9662;
             </p>

           </div>
           <ul className="profiles-dropdown-menu">
             { profiles }
             <li>
               <button onClick={this.props.logout}>
                 Logout
               </button>
             </li>
           </ul>
        </div>
      </div>
    )
  }

  render(){
    let currentPath = this.props.path;
    let currentNavBar;
    if (currentPath === '/') {
      currentNavBar = this.renderHomeNavBar();
    } else if (/browse/.test(currentPath)) {
      currentNavBar = this.renderProfileNavBar();
    }

    return (
      <nav className="nav-bar-wrapper">
        <div className="navbar-logo">
          <h1 className="logo">
            <Link to="/">
              Streamix
            </Link>
          </h1>
        </div>

        { currentNavBar }
      </nav>
    )
  }
}

export default NavBar;
