import React from 'react';
import PropTypes from 'prop-types';
import LoginBox from './LoginBox';
import { HeaderWithoutLogout } from './Header';
import '../css/login.css';

class Login extends React.Component {
  pushHandle = (authData) => {
    const { history } = this.props;
    history.push(`list/${authData.user.uid}`);
  };

  render() {
    return (
      <div>
        <HeaderWithoutLogout />
        <div className="login-header">
          <h2>Login</h2>
          <LoginBox pushHandle={this.pushHandle} />
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default Login;
