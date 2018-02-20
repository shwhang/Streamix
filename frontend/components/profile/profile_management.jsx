import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileManagement extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h1>Hellow</h1>
      </div>
    )
  }
}

export default withRouter(ProfileManagement);
