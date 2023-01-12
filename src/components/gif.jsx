import React, { PureComponent } from 'react';

class Gif extends PureComponent {
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" style={{ width: 300 }} />
    );
  }
}

export default Gif;
