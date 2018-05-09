import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MediaRow from './media_row';

// TODO: Check if all genres are be loaded on new signup/login
// TODO: Delete all genres on logout
// TODO: Create a spinner for loading playlist to ensure genres is fully loaded
class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaDetails: ""
    }
  }

  getFirstThumbnail(media_thumbnails){
    let spaceIdx = media_thumbnails.indexOf(" ");
    let thumbnail = media_thumbnails.slice(0, spaceIdx);

    return thumbnail;
  }

  generateRandomHeader(){
    // TODO: get a bunch of header videos and add them to videos
    //allMedias will only contain nature videos
    const allMedias = this.props.allGenres[3].media;

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

  // renderMediaCarouselRow(medias) {
  //   const media_row = medias.slice(4).map((media) => {
  //     let video = media.video;
  //
  //     return (
  //       <div
  //         className="media-item"
  //         key={`media-item-${media.medium.id}`}
  //         >
  //         <img src={this.getFirstThumbnail(video.thumbnails)}
  //         className="media-carousel-img">
  //
  //         </img>
  //       </div>
  //     )
  //   })
  //
  //   return media_row;
  // }

  renderAllGenres(){
    const genres = this.props.allGenres.map((genre) => {

      return (
        <div key={`genre-list-item-${genre.id}`}
          className="genre-row">

          <h3 className="genre-row-title">
            {genre.name[0].toUpperCase() + genre.name.slice(1)}
          </h3>

          <MediaRow getFirstThumbnail={this.getFirstThumbnail} medias={genre.media} />

          {
          //ADD DETAIL BOX HERE
          }
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
