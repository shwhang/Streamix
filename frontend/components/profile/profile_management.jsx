import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class ProfileManagement extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <NavBarContainer path={this.props.path}/>
        <h1>Manage Profiles</h1>
      </div>
    )
  }
}

export default withRouter(ProfileManagement);
