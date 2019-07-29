import React, { Component } from 'react';
import ArrayTable2 from '../components/ArrayTable';
import Header from '../components/Header';
import '../css/Test.css';

class Test extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="test">
          <ArrayTable2 />
        </div>
      </div>
    );
  }
}

export default Test;
