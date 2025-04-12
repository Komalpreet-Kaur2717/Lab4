// src/firebase/firebaseConfig.js
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

// You only need config if it's not auto-detected from `google-services.json`
const firebaseConfig = {
  apiKey: "AIzaSyA7Z3P0tLQEQy7Fy9MotoCci96EnPY_wrw",
  authDomain: "webapp-cf67b.firebaseapp.com",
  projectId: "webapp-cf67b",
  storageBucket: "webapp-cf67b.appspot.com",
  messagingSenderId: "442961004701",
  appId: "1:442961004701:web:48f06e5b200ef58d142c74",
  measurementId: "G-N4Q6F8HGPE",
};

// Initialize only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { auth };
