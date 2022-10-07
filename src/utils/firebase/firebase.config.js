import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCpmdA-oSm522dyqj031Gwr640N7S_wqE",
  authDomain: "instagram-clone-fb7b1.firebaseapp.com",
  projectId: "instagram-clone-fb7b1",
  storageBucket: "instagram-clone-fb7b1.appspot.com",
  messagingSenderId: "607712064538",
  appId: "1:607712064538:web:25350f7cefd405066fcda3"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage, firebase };