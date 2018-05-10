import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import MediaModal from './media_modal';

class MediaRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: props.carousel,
      medium: null
    }

    this.currentVideos = [];
    this.nextVideos = [];

    this.handleVideosNavigation = this.handleVideosNavigation.bind(this);
    this.renderMediaModal = this.renderMediaModal.bind(this);
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
      i <= 3 ? media.style.display = "none" : media.style.display = "flex";
    })

    this.currentVideos = this.currentVideos.slice(4).concat(this.currentVideos.slice(0, 4));
  }

  //PUT THIS IN ITS OWN COMPONENT
  getMediaItems(){
    const media_row = this.props.medias.map((media) => {
      let video = media.video;

      return (
        <div
          className="media-item"
          key={`media-item-${media.medium.id}`} >

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
    })

    return media_row
  }

  renderMediaCarouselRow() {
    let media_row = this.getMediaItems();

    return (
      <div className="medias-row">

        <div className="carousel">
          <div className="left-arrow-btn" onClick={this.handleVideosNavigation}>
            <div className="arrow-code">
              &#8249;
            </div>
          </div>

          <div className="media-items">
            { media_row }
          </div>

          <div className="right-arrow-btn" onClick={this.handleVideosNavigation}>
            <div className="arrow-code">
              &#8250;
            </div>
          </div>
        </div>

        { this.state.medium }
      </div>
    );
  }

  renderMediasForGenrePage(){
    let medias = this.getMediaItems();
    return(
      <div className="genre-medias-row">
        {medias}
      </div>
    )
  }


  renderMediaModal(medium){
    console.log(medium)
    this.setState({
      medium: (
        <MediaModal medium={medium.medium} video={medium.video} getFirstThumbnail={this.props.getFirstThumbnail}/>
      )
    })

  }

  render(){
    let mediaRow = (this.state.carousel ? this.renderMediaCarouselRow() : this.renderMediasForGenrePage())

    return (
      <div>

        { mediaRow }

        {this.state.medium}
      </div>
    )
  }
}

export default MediaRow;
