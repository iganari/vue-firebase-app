import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTIROlxUxY-N8KtkZJHyoakZtQlxatpRA",
  authDomain: "abetomo-sandbox.firebaseapp.com",
  databaseURL: "https://abetomo-sandbox.firebaseio.com",
  projectId: "abetomo-sandbox",
  storageBucket: "abetomo-sandbox.appspot.com",
  messagingSenderId: "526273012962",
  appId: "1:526273012962:web:570bf33a6b8bd81ab2eabb",
  measurementId: "G-XLYR7V0MY6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
