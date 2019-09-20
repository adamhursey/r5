import React from 'react';
import PropTypes from 'prop-types';
import LoginBox from './LoginBox';
import Header from './Header';
import '../css/login.css';

class Login extends React.Component {
  pushHandle = (authData) => {
    const { history } = this.props;
    history.push(`list/${authData.user.uid}`);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="login-header">
          <h2>Login</h2>
          <LoginBox pushHandle={this.pushHandle} />
          <p>Auth coming soon... Buttons currently link you to home page </p>
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
