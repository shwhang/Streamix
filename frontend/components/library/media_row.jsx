import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class MediaRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: false
    }

    this.currentVideos = props.medias.slice(0);
    this.nextVideos = props.medias.slice(4);
    // this.currentVideos = props.medias;
    this.handleVideosNavigation = this.handleVideosNavigation.bind(this);
    // Carousel should be passed in as true or false
    // true from library component
    // false from genre component
  }

  componentWillMount(){

  }

  handleVideosNavigation(e) {
    //Can go left or right
    e.preventDefault();
    let direction = e.target.parentElement.className;
    let mediasRowNode = e.target.parentNode.parentNode;
    let mediaItems = mediasRowNode.children[1].children;

    let first = Array.prototype.slice.call(mediaItems).slice(0, 4);

    let last = Array.prototype.slice.call(mediaItems).slice(4);
    // debugger
    if (/left/.test(direction)) {
      first.forEach((media) => {
        media.classList.add("slideleft");
      })

    } else {
      last.forEach((media) => {
        media.classList.add("slideright");
      })
    }

    let mediaRow = document.getElementsByClassName('medias-row');
  }

  //Get first thumbnail from props
  renderMediaCarouselRow() {
    const media_row = this.currentVideos.map((media) => {
      let video = media.video;

      return (
        <div
          className="media-item"
          key={`media-item-${media.medium.id}`}
          >
          <img src={this.props.getFirstThumbnail(video.thumbnails)}
          className="media-carousel-img">

          </img>
        </div>
      )
    })

    return media_row;
  }

  render(){
    return (
      <div className="medias-row">
        <div className="left-arrow-btn" onClick={this.handleVideosNavigation}>
          <div className="arrow-code">
            &#8249;
          </div>
        </div>

        <div className="carousel">
          {this.renderMediaCarouselRow()}
        </div>

        <div className="right-arrow-btn" onClick={this.handleVideosNavigation}>
          <div className="arrow-code">
            &#8250;
          </div>
        </div>
      </div>
    )
  }
}

export default MediaRow;
