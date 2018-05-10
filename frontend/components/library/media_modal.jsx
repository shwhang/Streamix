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
    console.log(this.props.medium)
    let medium = this.props.medium;
    let video = this.props.video;
    this.setState({
      title: medium.title,
      year: medium.year,
      mpaaRating: medium.mpaa_rating,
      description: medium.description,
      video: video.id,
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
        video: video.id,
        thumbnail: this.props.getFirstThumbnail(video.thumbnails)
      })
    }
  }

  render() {
    return (
      <div className="media-modal-box">
        <div className="modal-gradient"> </div>

        <div className="media-details">

          <h1 className="media-title">
            {this.state.title}
          </h1>

          <article className="media-small-details">
            <p className="year">{this.state.year}</p>

            <p className="mpaa-rating">{this.state.mpaaRating}</p>
          </article>

          <p className="description">
            {this.state.description}
          </p>

          <article className="media-modal-buttons">
            <Link to={`/browse/videos/${this.state.video}`} className="media-play-button">
              PLAY
            </Link>

            <Link to="" className="media-add-button">
              + MY LIST
            </Link>
          </article>
        </div>

        <ul className="media-modal-options">
          <li>OVERVIEW</li>
        </ul>

        <img src={this.state.thumbnail} className="modal-image"></img>


      </div>
    )
  }
}

export default MediaModal;
