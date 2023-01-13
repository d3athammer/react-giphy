import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "Jri8aRpIIgFn7V95ef"
    };
    this.search();
    this.selectGif = this.selectGif.bind(this);
  }

  search = (query) => {
    // API call
    giphy('gaqBWN8l5fE73O6QPCoJDhTTN0o4x3na').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  // selectGif method is to reassign the state of selectedGifId to the selectGif
  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const { gifs, selectedGifId } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          {/* here you can change the selectGif to this id, which in turn will change selectedGifId to be featured */}
          <GifList gifs={gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
