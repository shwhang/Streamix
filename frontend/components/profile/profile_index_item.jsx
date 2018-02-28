import React from 'react';
import { Link } from 'react-router-dom';

class ProfileIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.profileLink;
    if(this.props.formType === "/profiles"){
      this.profileLink = `browse/${props.profile.id}`
    } else {
      this.profileLink = `manage/edit/${props.profile.id}`
    }
  }

  render(){
    debugger
    return (
      <Link to={this.profileLink}>
        <div className="avatar-container">
          <img src={this.props.profile.avatar}  className="avatar-img"/>
        </div>

        <p>{this.props.profile.name}</p>
      </Link>
    )
  }
}

export default ProfileIndexItem;
