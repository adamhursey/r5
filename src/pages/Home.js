import React from 'react';
import ArrayTable from "../components/ArrayTable";
import Header from '../components/Header';
import '../css/home.css';

class Home extends React.Component {
  state = {
    data: [{ "albumID": 1, "albumTitle": "Sgt. Pepper's Lonely Hearts Club Band", "artist": "The Beatles", "image": "https://cdn.albumoftheyear.org/album/thumbs/sgt-peppers-lonely-hearts-club-band.jpg", "date": 1967, "genre": "POP ROCK", "score": 98, "spotify": "http://open.spotify.com/album/1PULmKbHeOqlkIwcDMNwD4", 'listened': false }]
  }



  componentDidMount() {
    console.log('mounted');
    // let listenArray = new Array(500);
    this.setState({data: require('../data.json')})
    let data = this.state.data;
    data.map(album => {
      album['listened'] = false;
    })
  }r

  toggleListened = (albumID) => {
    const data = {...this.state.data};
    data[albumID].listened = !data[albumID].listened;
    console.log(albumID);

    this.setState({
      data,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="table">
          <ArrayTable
            data={this.state.data}
            toggleListened={this.toggleListened}
          />
        </div>
      </div>
    );
  }
}

export default Home;
