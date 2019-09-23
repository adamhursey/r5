import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import ArrayTable from './ArrayTable';
import Header from './Header';
import '../css/home.css';
// import { firebaseApp } from '../base';

// firebaseApp.auth().onAuthStateChanged((user) => {
//   if (user) {
//     User logged in already or has just logged in.
//      console.log('sombodys here');
//   } else {
//      User not logged in or has just logged out.
//      console.log('no one here');
//   }
// });

class Home extends React.Component {
  componentDidMount() {
    // console.log(this.props.match.params.userID);
  }

  logout = async () => {
    const { history } = this.props;
    // console.log('logggggin out');
    await firebase.auth().signOut();

    history.push(`/`);
  };

  toggleListened = (albumID) => {
    const { listened } = this.state;
    listened[albumID] = !listened[albumID];
    this.setState({
      listened,
    });
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <Header logout={this.logout} />
        <div className="table">
          <ArrayTable userID={match.params.userID} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ userID: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
