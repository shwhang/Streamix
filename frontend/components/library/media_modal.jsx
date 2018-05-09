import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class MediaModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      year: "",
      mpaaRating: "",
      description: "",
      video: "",
      thumbnail: ""
    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="media-modal-box">
        <h1 className="media-title">
          {this.state.title}
        </h1>

        <article>
          <p>{this.state.year}</p>
          <p>{this.state.mpaaRating}</p>
        </article>

        <p>
          {this.state.description}
        </p>

        <article>
          <Link to="">PLAY</Link>
          <Link to="">+ MY LIST</Link>
        </article>
      </div>
    )
  }
}
