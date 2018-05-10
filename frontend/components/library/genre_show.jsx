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


  componentWillReceiveProps(nextProps){
    if(this.props.match.url !== nextProps.match.url) {
      let url = nextProps.match.url;
      let slashIdx = url.lastIndexOf("/");
      let genreId = parseInt(url.slice(slashIdx + 1));

      this.medias = this.filterGenreMedias(genreId);
    }
  }

  getFirstThumbnail(media_thumbnails){
    let spaceIdx = media_thumbnails.indexOf(" ");
    let thumbnail = media_thumbnails.slice(0, spaceIdx);

    return thumbnail;
  }


  renderMediasInRowsOf4(){
    let rows = [];
    let numOfRows = this.medias.length/4;
    let startIdx = 0, endIdx = 4;

    while (numOfRows > 0) {
      let medias = this.medias.slice(startIdx, endIdx);

      rows.push(
          <MediaRow
            medias={medias}
            carousel={false}
            getFirstThumbnail={this.getFirstThumbnail}
            key={`genre-media-row-${numOfRows}`}
            />
      )

      numOfRows--;
      startIdx += 4;
      endIdx += 4;
    }

    return rows;
  }

  render(){

    let mediasRow = this.renderMediasInRowsOf4();

    return (
      <div>
        <NavBarContainer path={this.props.match.url} allProfiles={this.props.allProfiles}/>

        <div className="genre-medias-container">
          <h3 className="genre-page-title">
            {this.genre[0].toUpperCase() + this.genre.slice(1)}
          </h3>
          { mediasRow }
        </div>
      </div>
    )
  }
}

export default GenreShow;
