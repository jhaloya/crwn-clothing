import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDnfG667DluSI_-hRyOnqiOFjGroJ2sm_w",
  authDomain: "crwn-db-b053a.firebaseapp.com",
  databaseURL: "https://crwn-db-b053a.firebaseio.com",
  projectId: "crwn-db-b053a",
  storageBucket: "crwn-db-b053a.appspot.com",
  messagingSenderId: "416687382594",
  appId: "1:416687382594:web:107cbcf78b62fca5be0ddb",
  measurementId: "G-YBWBL7MYTJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
