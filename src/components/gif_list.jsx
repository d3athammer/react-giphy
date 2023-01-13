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
    const { gifs, selectGif } = this.props;
    // having a selectGif here allows the parent component to take in the gif's ID
    // selectGif props is set in the parent folder
    return gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={selectGif} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
