import React from 'react';
import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import LoginButton from './LoginButton';
import '../css/LoginBox.css';
import { firebaseApp } from '../base';

class LoginBox extends React.Component {
  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.listPush);
  };

  listPush = (authData) => {
    const { pushHandle } = this.props;
    // console.log(authData.user.uid);
    pushHandle(authData);
  };

  render() {
    return (
      <div className="LoginBox">
        <LoginButton site="Google" authenticate={this.authenticate} />
        <LoginButton site="Github" authenticate={this.authenticate} />
        <LoginButton site="Twitter" authenticate={this.authenticate} />
        <LoginButton site="Facebook" authenticate={this.authenticate} />
      </div>
    );
  }
}

LoginBox.propTypes = {
  pushHandle: PropTypes.func.isRequired,
};
export default LoginBox;
