import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig={
    apiKey: "AIzaSyBKEps87kFa70rs-EDzm-vIsQN6qdrjnYY",
  authDomain: "splash-page1.firebaseapp.com",
  databaseURL: "https://splash-page1-default-rtdb.firebaseio.com",
  projectId: "splash-page1",
  storageBucket: "splash-page1.appspot.com",
  messagingSenderId: "962152848574",
  appId: "1:962152848574:web:8844cd824eb7a543f212ef",
  measurementId: "G-20Q9GPJBDV"
};

const fire=firebase.initializeApp(firebaseConfig);
const db=fire.firestore();

export {fire, db};