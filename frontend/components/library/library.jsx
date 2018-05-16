import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import MediaRow from './media_row';
import MediaModal from './media_modal';

class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      medium: null,
      video: null
    }
  }

  getFirstThumbnail(media_thumbnails){
    let thumbs = media_thumbnails.split(" ");

    return thumbs[1];
  }

  generateRandomHeader(){
    const allMedias = this.props.allGenres[5].media;

    const numOfMedias = allMedias.length;
    const randomNum = Math.floor(Math.random() * numOfMedias);

    return allMedias[randomNum];
  }

  renderHeaderVideo(){
    const randomVideo = this.generateRandomHeader();

    const headerMedia = randomVideo.medium;
    const headerVideo = randomVideo.video;

    const thumbnailUrl = this.getFirstThumbnail(headerVideo.thumbnails);
    const videoUrl = headerVideo.video_url;

    const header = (
      <div className="header-wrapper">
        <div className="gradient-wrapper">

        </div>
        <article className="header-details">
          <h1 className="header-title">
            {headerMedia.title}
          </h1>

          <p className="header-description">
            {headerMedia.description}
          </p>

          <article className="media-modal-buttons">
            <Link to={`/browse/videos/${headerVideo.id}`} className="media-play-button">
              PLAY
            </Link>

            <Link to="" className="media-add-button">
              + MY LIST
            </Link>
          </article>
        </article>

        {//Remount video tag w/ new source
        }
        <video
          autoPlay="autoplay"
          muted
          loop
          className="header-video">
          <source src={videoUrl} />
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
