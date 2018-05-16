import React from 'react';
import { Link } from 'react-router-dom';

class MediaItem extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    let medium = this.props.medium;
    let video = this.props.medium.video
    return (
      <div
        className="media-item"
        key={`media-item-${medium.id}`} >

        <img
          src={this.props.getFirstThumbnail(video.thumbnails)}
          className="media-carousel-img">
        </img>

          <Link to={`/browse/videos/${video.id}`} className="play-button">

          </Link>

        <div className="media-details-button" onClick={() => {
            this.renderMediaModal(media)
          }}>
          &#x22BF;
        </div>
      </div>
    )
  }
}

export default MediaItem;
