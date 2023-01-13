import React, { PureComponent } from 'react';


class Gif extends PureComponent {
  handleClick = () => {
    const { selectGif, id } = this.props;
    if (selectGif) {
      console.log(id);
      selectGif(id);
    }
  }

  render() {
    const { id } = this.props;
    const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
