import React from 'react';
import { Link } from 'react-router-dom';

class ProfileIndexItem extends React.Component{
  constructor(props){
    super(props);

    this.profileLink = "";
  }

  updateProfileItemLink(){
    if(this.props.formType === "/profiles"){
      this.profileLink = `browse/${this.props.profile.id}`
    } else {
      this.profileLink = `edit/${this.props.profile.id}`
    }
  }

  render(){
    this.updateProfileItemLink();
    
    return (
      <Link to={this.profileLink} className="profile-index-item" profile={this.props.profile}>
        <div className="avatar-container">
          <img src={this.props.profile.avatar_url}  className="avatar-img"/>
        </div>

        <p>{this.props.profile.name}</p>
      </Link>
    )
  }
}

export default ProfileIndexItem;
