import React, { Component } from 'react';

// const SearchBar = () => {
//   return (
//     <input type="text" className="form-control form-search" />
//   );
// };

// export default SearchBar;

class SearchBar extends Component {
  handleUpdate = (event) => {
    const { searchFunction } = this.props;
    searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
