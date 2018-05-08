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
    // const headerMedia = this.props.allGenres[0].media[0];
    //
    // const header = (
    //   <div className="header-wrapper">
    //     {this.getFirstThumbnail(headerMedia.thumbnails)}
    //   </div>
    // )
    //
    // return header;
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
