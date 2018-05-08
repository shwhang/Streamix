import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Library extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){

  }

  renderAllGenres(){
    const genres = this.props.allGenres.map((genre) => {
      return(
        <div key={`genre-list-item-${genre.id}`}>
          <h1>{genre.name[0].toUpperCase() + genre.name.slice(1)}</h1>
        </div>
      )
    })

    return genres;
  }

  getFirstThumbnail(media_thumbnails){
    let spaceIdx = media_thumbnails.indexOf(" ");
    let thumbnail = media_thumbnails.slice(0, spaceIdx);

    return thumbnail;
  }

  generateRandomHeader(){
    // TODO: get a bunch of header videos and add them to videos
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

  render(){
    const genres = this.renderAllGenres();
    return (
      <div className="library-container">
        {this.renderHeaderVideo()}
        {genres}
      </div>
    )
  }
}


export default Library;
