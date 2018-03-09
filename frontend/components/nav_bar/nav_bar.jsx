import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.currentNavBar;
  }

  componentWillMount(){
    // debugger;
  }
  //
  // componentWillReceiveProps(nextProps){
  //   debugger
  // }
  renderHomeNavBar(){
    return (
      <Link to="/login" className="home-sign-in-button">Sign In</Link>
    )
  }

  renderProfileNavBar(){
    // return (
    //   <button onClick={this.props.logout}>Log out</button>
    // )

    let profiles = this.props.allProfiles.filter((profile) => {
      return profile.id !== this.props.currentProfile.id
    })

    profiles = profiles.map((profile) => {
      return (
        <li key={`profile-list-item-${profile.id}`}>
          <img src={profile.image} />
          <p>{profile.name}</p>
        </li>
      )
    })

    return (
      <ul>
        { profiles }
      </ul>
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
        <h1 className="logo">
          <Link to="/">
            Streamix
          </Link>
        </h1>

        { currentNavBar }
      </nav>
    )
  }
}

export default NavBar;
