import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class MediaRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: props.carousel,
    }

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
    e.preventDefault();

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

  getMediaItems(){
    const media_row = this.props.medias.map((media) => {
      let video = media.video;

      return (
        <div
          className="media-item"
          key={`media-item-${media.medium.id}`}
          >

          <img
            src={this.props.getFirstThumbnail(video.thumbnails)}
            className="media-carousel-img">
          </img>

            <Link to={`/browse/videos/${video.id}`} className="play-button">

            </Link>

          <div className="media-details-button">
            &#x22BF;
          </div>
        </div>
      )
    })

    return media_row
  }

  renderMediaCarouselRow() {
    let media_row = this.getMediaItems();

    return (
      <div className="medias-row">
        <div className="left-arrow-btn" onClick={this.handleVideosNavigation}>
          <div className="arrow-code">
            &#8249;
          </div>
        </div>

        <div className="carousel">
          { media_row }
        </div>

        <div className="right-arrow-btn" onClick={this.handleVideosNavigation}>
          <div className="arrow-code">
            &#8250;
          </div>
        </div>

        {
          //PUT MEDIA DETAILS
        }
      </div>
    );
  }

  renderMediasForGenrePage(){
    let media_items = this.getMediaItems();

    // media_items.splice(4, 0, "Hello");
    // debugger;

    let insertIterations = media_items.length/4;

    let startIdx = 4;
    let counter = 0
    while (counter < insertIterations) {
      media_items.splice(startIdx + counter , 0, (
        <div
          key={`media-model-${startIdx + counter}`}
          className="genre-media-modal"
          >
          <p>Hello</p>
        </div>
      ))

      startIdx += 4;
      counter++;
    }

    return (
      <div className="genre-medias-row">
        {media_items}
      </div>
    )
  }

  render(){
    let mediaRow = (this.state.carousel ? this.renderMediaCarouselRow() : this.renderMediasForGenrePage())

    return (
      <div>

        { mediaRow }

      </div>
    )
  }
}

export default MediaRow;
