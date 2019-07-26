import React from 'react';
import ArrayTable from "./ArrayTable";
import './App.css';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p> Rolling Stones 500 Greatest Albums of All Time </p>
        <ArrayTable />
      </header>
    </div>
  );
}

export default App;
