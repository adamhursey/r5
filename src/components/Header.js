import React from 'react';
import '../css/Header.css';
import PropTypes from 'prop-types';

const Header = ({ logout }) => (
  <div className="Header-container">
    <div className="Header-logo">
      <div className="Title">
        <h1>R5</h1>
      </div>
    </div>

    <button type="button" className="logout-button" onClick={() => logout()}>
      Logout
    </button>
  </div>
);

const HeaderWithoutLogout = () => (
  <div className="Header-container">
    <div className="Header-logo">
      <div className="Title">
        <h1>R5</h1>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};

export { HeaderWithoutLogout };

export default Header;
