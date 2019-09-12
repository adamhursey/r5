import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => (
  <div className="Header-main">
    <Link to="/home">
      <div className="Title">
        <h1>R5</h1>
      </div>
    </Link>
  </div>
);

export default Header;
