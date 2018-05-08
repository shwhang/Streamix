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

  render(){
    const genres = this.renderAllGenres();
    return (
      <div className="library-container">
        {genres}
      </div>
    )
  }
}


export default Library;
