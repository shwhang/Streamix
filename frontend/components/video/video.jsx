import React from 'react';
import { Link } from 'react-router-dom';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null
    }
  }

  componentDidMount() {
    let slashIdx = this.props.match.url.lastIndexOf("/");
    let videoId = this.props.match.url.slice(slashIdx + 1);

    this.props.requestOneVideo(parseInt(videoId)).then((video) => {
      this.setState({
        video: (
          <video controls autoPlay width="100%" height="100%" className="video-player">
            <source src={video.video.video_url} />
          </video>
        )
      })
    });
  }

  render(){
    return(
      <div className="video-container">

        <Link to={`/browse/${this.props.currentProfile.id}`}
          className="back-to-profile-btn-container">
          <p className="profile-arrow-btn">&#10140;</p>
        </Link>
        {this.state.video}
      </div>
    )
  }
}

export default Video;
