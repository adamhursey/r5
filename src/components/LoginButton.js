import React from 'react';
import '../css/LoginButton.css';

const LoginButton = (props) => {
  return (
    <div className="buttonWrap">
      <button className="loginButton">
        <img className="logo" alt='' src={require(`../images/${props.site.toLowerCase()}.svg`)} />
        <span className="label">{props.site}</span>
      </button>
    </div>
  );
};

export default LoginButton;
