import React from 'react';
import { Link } from 'react-router-dom';

class MediaItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playButton: null,
      expandButton: null
    }

  }

  renderButtons(e) {
    let medium = this.props.medium;
    let video = this.props.medium.video;
    this.setState({
      playButton: (
        <Link to={`/browse/videos/${video.id}`} className="play-button"></Link>
      ),
      expandButton: (
        <div className="media-details-button" onClick={() => {
            this.props.renderMediaModal(medium)
          }}>
          &#x22BF;
        </div>
      )
    })
  }

  hideButtons(e) {
    this.setState({
      playButton: null,
      expandButton: null
    })
  }
  
  render() {
    let medium = this.props.medium;
    let video = this.props.medium.video;

    return (
      <div
        className="media-item"
        key={`media-item-${medium.id}`}
        onMouseEnter={this.renderButtons.bind(this)}
        onMouseLeave={this.hideButtons.bind(this)}>

        <img
          src={this.props.getFirstThumbnail(video.thumbnails)}
          className="media-carousel-img">
        </img>

        {this.state.playButton}

        {this.state.expandButton}
      </div>
    )
  }
}

export default MediaItem;
