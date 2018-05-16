import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import MediaRow from './media_row';
import MediaModal from './media_modal';

class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      medium: null,
      video: null,
      videoPlayer: null
    }
  }

  getFirstThumbnail(media_thumbnails){
    let thumbs = media_thumbnails.split(" ");

    return thumbs[Math.floor(thumbs.length/2)];
  }

  generateRandomHeader(){
    const allMedias = this.props.allGenres[5].media;

    const numOfMedias = allMedias.length;
    const randomNum = Math.floor(Math.random() * numOfMedias);

    return allMedias[randomNum];
  }

  componentWillMount() {
    this.getHeaderVideo();
  }

  getHeaderVideo(){
    let randomMedium = this.generateRandomHeader();
    let headerMedia = randomMedium.medium;
    let headerVideo = randomMedium.video;

    let thumbnailUrl = this.getFirstThumbnail(headerVideo.thumbnails);
    let videoUrl = headerVideo.video_url;

    this.setState({
      medium: headerMedia,
      video: headerVideo
    })
  }


  componentWillReceiveProps(nextProps){
    if(this.props.match.params.id !== nextProps.match.params.id){
      this.getHeaderVideo();
    }
  }

  renderHeaderVideo(){
    const header = (
      <div className="header-wrapper">
        <div className="gradient-wrapper">

        </div>
        <article className="header-details">
          <h1 className="header-title">
            {this.state.medium.title}
          </h1>

          <p className="header-description">
            {this.state.medium.description}
          </p>

          <article className="media-modal-buttons">
            <Link to={`/browse/videos/${this.state.video.id}`} className="media-play-button">
              PLAY
            </Link>

            <Link to="" className="media-add-button">
              + MY LIST
            </Link>
          </article>
        </article>

        <video
          autoPlay="autoplay"
          muted
          loop
          className="header-video"
          key={`header-video-${this.state.video.id}`}>
          <source src={this.state.video.video_url} />
        </video>
      </div>
    )

    return header;
  }

  renderAllGenres(){
    const genres = this.props.allGenres.map((genre) => {

      return (
        <div key={`genre-list-item-${genre.id}`}
          className="genre-row">

          <h3 className="genre-row-title">
            {genre.name[0].toUpperCase() + genre.name.slice(1)}
          </h3>

          <MediaRow getFirstThumbnail={this.getFirstThumbnail} medias={genre.media}
          carousel={true}
          />

        </div>
      )
    })

    return genres;
  }

  render(){
    const genres = this.renderAllGenres();

    return (
      <div className="library-container">
        { this.renderHeaderVideo() }
        { genres }
      </div>
    )
  }
}


export default Library;
