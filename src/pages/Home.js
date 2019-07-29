import React from 'react';
import ArrayTable2 from "../components/ArrayTable2";
import Header from '../components/Header';
import './home.css';

const listenArray = [1,2,3,4,5]

function Home(props) {
  return (
    <div>
      <Header />
      <header className="home">
        <h3> Rolling Stones 500 Greatest Albums of All Time </h3>
        <ArrayTable2 listenArray={listenArray}/>
      </header>
    </div>
  );
}

export default Home;
