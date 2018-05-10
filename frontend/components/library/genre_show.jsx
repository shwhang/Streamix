import React from 'react';
import {Link, withRouter } from 'react-router-dom';

import NavBarContainer from '../nav_bar/nav_bar_container';

import MediaRow from './media_row';

class GenreShow extends React.Component {
  constructor(props) {
    super(props);
    this.genre = "";
    this.medias = [];
  }

  filterGenreMedias(genreId){
    let genre = this.props.allGenres.filter((genre) => {
      if (genre.id === genreId) {return genre}
    })[0]

    this.genre = genre.name;
    return genre.media
  }

  componentWillMount(){
    this.props.requestAllProfiles();

    let url = this.props.match.url;
    let slashIdx = url.lastIndexOf("/");
    let genreId = parseInt(url.slice(slashIdx + 1));

    this.medias = this.filterGenreMedias(genreId);
  }

  getFirstThumbnail(media_thumbnails){
    let spaceIdx = media_thumbnails.indexOf(" ");
    let thumbnail = media_thumbnails.slice(0, spaceIdx);

    return thumbnail;
  }

  render(){

    let mediasRow = (
        <MediaRow
          getFirstThumbnail={this.getFirstThumbnail}
          carousel={false}
          medias={this.medias}
          />
      )

    return (
      <div>
        <NavBarContainer path={this.props.match.url} allProfiles={this.props.allProfiles}/>

        <h3>{this.genre}</h3>
        { mediasRow }
      </div>
    )
  }
}

export default GenreShow;
