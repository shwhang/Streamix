import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class MediaRow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){

  }

  //Get first thumbnail from props
  renderMediaCarouselRow() {
    debugger
    const media_row = this.props.medias.map((media) => {
      let video = media.video;

      return (
        <div
          className="media-item"
          key={`media-item-${media.medium.id}`}
          >
          <img src={this.props.getFirstThumbnail(video.thumbnails)}
          className="media-carousel-img">

          </img>
        </div>
      )
    })

    return media_row;
  }


  render(){
    return (
      <div className="medias-row">
        <div className="left-arrow-btn">
          <div className="arrow-code">
            &#8249;
          </div>
        </div>

        {this.renderMediaCarouselRow()}

        <div className="right-arrow-btn">
          <div className="arrow-code">
            &#8250;
          </div>
        </div>
      </div>
    )
  }
}

export default MediaRow;
