import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class MediaModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      year: "",
      mpaaRating: "",
      description: "",
      video: "",
      thumbnail: ""
    }
  }

  componentWillMount() {
    let medium = this.props.medium;
    let video = this.props.video;
    this.setState({
      title: medium.title,
      year: medium.year,
      mpaaRating: medium.mpaa_rating,
      description: medium.description,
      video: video.video_url,
      thumbnail: this.props.getFirstThumbnail(video.thumbnails)
    })
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.medium !== nextProps.medium) {
      let medium = nextProps.medium;
      let video = nextProps.video;

      this.setState({
        title: medium.title,
        year: medium.year,
        mpaaRating: medium.mpaa_rating,
        description: medium.description,
        video: video.video_url,
        thumbnail: this.props.getFirstThumbnail(video.thumbnails)
      })
    }
  }

  render() {
    return (
      <div className="media-modal-box">
        <div className="media-details">
          <h1 className="media-title">
            {this.state.title}
          </h1>

          <article>
            <p>{this.state.year}</p>
            <p>{this.state.mpaaRating}</p>
          </article>

          <p>
            {this.state.description}
          </p>

          <article>
            <Link to="">PLAY</Link>
            <Link to="">+ MY LIST</Link>
          </article>
        </div>

        <img src={this.state.thumbnail} className="modal-image"></img>
      </div>
    )
  }
}

export default MediaModal;
