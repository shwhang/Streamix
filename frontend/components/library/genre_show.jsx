import React from 'react';
import {Link, withRouter } from 'react-router-dom';

import NavBarContainer from '../nav_bar/nav_bar_container'
class GenreShow extends React.Component {
  constructor(props) {
    super(props);

  }
  componentWillMount(){
    this.props.requestAllProfiles();
  }

  render(){
    return (
      <div>
        <NavBarContainer path={this.props.match.url} allProfiles={this.props.allProfiles}/>
      </div>
    )
  }
}

export default GenreShow;
