import React from 'react';
import '../css/LoginButton.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Facebook = require('../images/facebook.svg');
const Github = require('../images/github.svg');
const Twitter = require('../images/twitter.svg');
const Google = require('../images/google.svg');

function imageGetter(logoName) {
  switch (logoName) {
    case 'Facebook':
      return Facebook;
    case 'Github':
      return Github;
    case 'Twitter':
      return Twitter;
    case 'Google':
      return Google;
    default:
      return '';
  }
}

const LoginButton = ({ site, authenticate }) => (
  <div className="buttonWrap">
    <Link to="/list/123">
      <button
        className="loginButton"
        type="button"
        onClick={() => authenticate(site)}
      >
        <img className="logo" alt="" src={imageGetter(site)} />
        <span className="label">{site}</span>
      </button>
    </Link>
  </div>
);
LoginButton.propTypes = {
  site: PropTypes.string.isRequired,
  authenticate: PropTypes.func.isRequired,
};
export default LoginButton;
