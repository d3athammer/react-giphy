import React, { Component } from 'react';
import Gif from './gif';

// const GifList = () => {
//   const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
//   return (
//     <img src={src} alt="" className="gif" style={{ width: 300 }} />
//   );
// };

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />);
  }
  render() {
    return (
      <div className="gif-list">
        {this.renderList( )}
      </div>
    )
  }
}

export default GifList;
