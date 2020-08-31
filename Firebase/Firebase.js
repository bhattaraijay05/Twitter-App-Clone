import * as firebase from "firebase";
import key from "./FirebaseAuth";

const firebaseConfig = {
  apiKey: key.apiKey,
  authDomain: key.authDomain,
  databaseURL: key.databaseURL,
  projectId: key.projectId,
  storageBucket: key.storageBucket,
  messagingSenderId: key.messagingSenderId,
  appId: key.appId,
  measurementId: key.measurementId,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { db, auth, storage };
