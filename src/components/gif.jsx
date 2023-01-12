import React, { PureComponent } from 'react';


class Gif extends PureComponent {
  handleClick = () => {
    this.setState({ selectedGifId: this.props.id });
  }

  sourceLink = (event) => {
    const src = (event.target.src);
    return src;
  }

  render() {
    const { id } = this.props;
    const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.props.handleClick} />
    );
  }
}

export default Gif;
