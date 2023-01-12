import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs:[],
      selectedGifId: "nACn0XkHxdOP6EsqDH"
    }

    this.search()
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

  render() {
    const gifs = [
      { id: "48n2jkdUxbOlG"},
      { id: "8H80IVPjAdKY8"},
      { id: "nACn0XkHxdOP6EsqDH"}
    ]
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
