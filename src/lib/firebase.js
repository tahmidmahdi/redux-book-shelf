import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZvF7NMXS1JinTxc5pdcOtYXw__xFYx1o",
  authDomain: "bookshelf-4972c.firebaseapp.com",
  projectId: "bookshelf-4972c",
  storageBucket: "bookshelf-4972c.appspot.com",
  messagingSenderId: "1080749392720",
  appId: "1:1080749392720:web:290065734f95eb8481e255",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
