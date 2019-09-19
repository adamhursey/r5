import Rebase from 're-base';

const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD5D3Gz0sNApWLFC9ZXC6Qlk5FN4BqZLAM',
  authDomain: 'rolling-500.firebaseapp.com',
  databaseURL: 'https://rolling-500.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
