import React from 'react';
import '../css/LoginButton.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Facebook = require('../images/facebook.svg');
const Github = require('../images/github.svg');
const Twitter = require('../images/twitter.svg');

function imageGetter(logoName) {
  switch (logoName) {
    case 'Facebook':
      return Facebook;
    case 'Github':
      return Github;
    case 'Twitter':
      return Twitter;
    default:
      return '';
  }
}

const LoginButton = ({ site }) => (
  <div className="buttonWrap">
    <Link to="/">
      <button className="loginButton" type="button">
        <img className="logo" alt="" src={imageGetter(site)} />
        <span className="label">{site}</span>
      </button>
    </Link>
  </div>
);
LoginButton.propTypes = {
  site: PropTypes.string.isRequired,
};
export default LoginButton;
