import React, { PureComponent } from 'react';


class Gif extends PureComponent {
  handleClick = () => {
    const { id } = this.props;
    const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={id} />
    );
  }

  render() {
    return (
      this.handleClick
    );
  }
}

export default Gif;
