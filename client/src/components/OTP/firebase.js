import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAaKngLuCgFlrnQxDcqgW6pjdObI9s9sJk",
  authDomain: "project-3unc.firebaseapp.com",
  databaseURL: "https://project-3unc.firebaseio.com",
  projectId: "project-3unc",
  storageBucket: "project-3unc.appspot.com",
  messagingSenderId: "1079983365488",
  appId: "1:1079983365488:web:6ebb6d0985c6de268343b5",
  measurementId: "G-FX33VNJVVR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;