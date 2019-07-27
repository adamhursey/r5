import React from 'react';
import LoginBox from '../components/LoginBox';
import './page.css';


function Login(props) {
  return (
    <div className="Page">
      <header className="Page-header">
        <h2>Login</h2>
        <LoginBox />
      </header>
    </div>
  );
}

export default Login;
