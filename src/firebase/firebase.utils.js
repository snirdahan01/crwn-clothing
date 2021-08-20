import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBBJX6pb5Aog-6nrj4YFb0t2LFXTR1Httw',
  authDomain: 'crwn-db-cf2d2.firebaseapp.com',
  projectId: 'crwn-db-cf2d2',
  storageBucket: 'crwn-db-cf2d2.appspot.com',
  messagingSenderId: '615457344175',
  appId: '1:615457344175:web:17f1efa7e501c19de3e25a',
  measurementId: 'G-T3FNWSM8P5',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
