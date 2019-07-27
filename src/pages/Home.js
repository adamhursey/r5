import React from 'react';
import ArrayTable from "../components/ArrayTable";
import './page.css';


function Home(props) {
  return (
    <div className="Page">
      <header className="Page-header">
        <h3> Rolling Stones 500 Greatest Albums of All Time </h3>
        <ArrayTable />
      </header>
    </div>
  );
}

export default Home;
