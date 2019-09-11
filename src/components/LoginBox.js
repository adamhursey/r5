import React from 'react';
import LoginButton from './LoginButton';
import '../css/LoginBox.css';

const LoginBox = () => (
  <div className="LoginBox">
    <LoginButton site="Github" />
    <LoginButton site="Facebook" />
    <LoginButton site="Twitter" />
  </div>
);

export default LoginBox;
