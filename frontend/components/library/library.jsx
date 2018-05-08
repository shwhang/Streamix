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

  renderHeaderVideo(){
    const headerMedia = this.props.allGenres[3].media[1].medium;
    const headerVideo = this.props.allGenres[3].media[1].video;

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
