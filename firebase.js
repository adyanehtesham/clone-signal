import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCq0-cTXQZbv1pfGxEJ1eT6uMcgifIaYSw",
  authDomain: "clone-signal-8b084.firebaseapp.com",
  projectId: "clone-signal-8b084",
  storageBucket: "clone-signal-8b084.appspot.com",
  messagingSenderId: "809380254870",
  appId: "1:809380254870:web:8e048a31bd41af772edeb7"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };