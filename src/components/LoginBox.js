import React from 'react';
import firebase from 'firebase/app';
import LoginButton from './LoginButton';
import '../css/LoginBox.css';
import { firebaseApp } from '../base';

async function authHandler(authData) {
  console.log(authData.user.uid);
}

function authenticate(provider) {
  const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  firebaseApp
    .auth()
    .signInWithPopup(authProvider)
    .then(authHandler);
}

const LoginBox = () => (
  <div className="LoginBox">
    <LoginButton site="Google" authenticate={authenticate} />
    <LoginButton site="Github" authenticate={authenticate} />
    <LoginButton site="Twitter" authenticate={authenticate} />
    <LoginButton site="Facebook" authenticate={authenticate} />
  </div>
);

export default LoginBox;
