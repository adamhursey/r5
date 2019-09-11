import React from 'react';
import LoginBox from '../components/LoginBox';
import Header from '../components/Header';
import '../css/login.css';

function Login() {
  return (
    <div>
      <Header />
      <div className="login-header">
        <h2>Login</h2>
        <LoginBox />
        <p>Auth coming soon... Buttons currently link you to home page </p>
      </div>
    </div>
  );
}

export default Login;
