import React from 'react';
import ArrayTable from '../components/ArrayTable';
import Header from '../components/Header';
import '../css/home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line global-require
      data: require('../data.json'),
    };
  }

  componentDidMount() {
    const { data } = this.state;
    data.map((album) => {
      // eslint-disable-next-line no-param-reassign
      album.listened = false;
      return album;
    });
  }

  toggleListened = (albumID) => {
    const { data } = this.state;
    data[albumID].listened = !data[albumID].listened;
    this.setState({
      data,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header />
        <div className="table">
          <ArrayTable data={data} toggleListened={this.toggleListened} />
        </div>
      </div>
    );
  }
}

export default Home;
