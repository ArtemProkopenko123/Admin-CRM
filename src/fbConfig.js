
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAH-N7zTAhQMiLqTo4EsbTaPqz5zpkqOhk",
    authDomain: "react-redux-firebase-001.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-001.firebaseio.com",
    projectId: "react-redux-firebase-001",
    storageBucket: "react-redux-firebase-001.appspot.com",
    messagingSenderId: "1048241119253"
  };
  firebase.initializeApp(config);

  firebase.firestore();
  const storage = firebase.storage();

  export {storage, firebase as default};