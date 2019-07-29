import React from 'react';
import LoginBox from '../components/LoginBox';
import Header from '../components/Header';
import './login.css';


function Login(props) {
  return (
    <div>
      <Header />
      <div className="login-header">
        <h2>Login</h2>
        <LoginBox />
      </div>
    </div>
  );
}

export default Login;
