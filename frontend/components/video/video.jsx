import React from 'react';
import { Link } from 'react-router-dom';

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let slashIdx = this.props.match.url.lastIndexOf("/");
    let videoId = this.props.match.url.slice(slashIdx + 1);
    debugger
    this.props.requestOneVideo(parseInt(videoId));
  }

  render(){
    return(
      <div>
        <p>HELO</p>
      </div>
    )
  }
}

export default Video;
