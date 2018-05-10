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
          <video controls autoPlay width="100%" height="100%">
            <source src={video.video.video_url} />
          </video>
        )
      })
    });
  }

  render(){
    return(
      <div className="video-container">

        <Link to={`/browse/${this.props.currentProfile.id}`}>
          &#10140;
        </Link>
        {this.state.video}
      </div>
    )
  }
}

export default Video;
