import React from 'react';
import ArrayTable from '../components/ArrayTable';
import Header from '../components/Header';
import '../css/home.css';

class Home extends React.Component {
  toggleListened = (albumID) => {
    const { listened } = this.state;
    listened[albumID] = !listened[albumID];
    this.setState({
      listened,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="table">
          <ArrayTable />
        </div>
      </div>
    );
  }
}

export default Home;
