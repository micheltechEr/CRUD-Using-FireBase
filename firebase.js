import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCsGb8mHX__0JVcayvRCBGnUwpKFRnvQHc",
    authDomain: "crudfirebase-d4685.firebaseapp.com",
    projectId: "crudfirebase-d4685",
    storageBucket: "crudfirebase-d4685.appspot.com",
    messagingSenderId: "615614653674",
    appId: "1:615614653674:web:29eba1e5d3955ff91de393",
    measurementId: "G-8L2T6WWM5H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore()
  export default {
firebase,
db
  }