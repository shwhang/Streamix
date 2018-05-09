import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class MediaRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: false,
    }

    // this.currentVideos = props.medias.slice(0);
    this.currentVideos = [];
    this.nextVideos = [];

    this.handleVideosNavigation = this.handleVideosNavigation.bind(this);
    // Carousel should be passed in as true or false
    // true from library component
    // false from genre component
  }

  componentWillReceiveProps(nextProps){

  }

  handleVideosNavigation(e) {
    //Can go left or right
    e.preventDefault();

    // let direction = e.target.parentElement.className;
    let mediasRowNode = e.target.parentNode.parentNode;
    let mediaItems = mediasRowNode.children[1].children;

    if (this.currentVideos.length === 0){
      this.currentVideos = Array.prototype.slice.call(mediaItems);
    }

    this.currentVideos.forEach((media, i) => {
      i <= 3 ? media.style.display = "none" : media.style.display = "block";
    })

    this.currentVideos = this.currentVideos.slice(4).concat(this.currentVideos.slice(0, 4));
  }

  //Get first thumbnail from props
  renderMediaCarouselRow() {
    const media_row = this.props.medias.map((media) => {
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


        // TODO: ADD MEDIA DETAIL BOX HERE ?
      </div>
    )
  }
}

export default MediaRow;
