import firebase from "firebase";
import "firebase/storage";

const firebaseProduction = {
  apiKey: "AIzaSyBegqALs_-f-kILtZVJaD9WaClBT7nejD4",
  authDomain: "bulshfin.firebaseapp.com",
  projectId: "bulshfin",
  storageBucket: "bulshfin.appspot.com",
  messagingSenderId: "543650122549",
  appId: "1:543650122549:web:d6c8a1b9e754162f739a7c",
  databaseURL: "https://bulshfin-default-rtdb.firebaseio.com",
  measurementId: "G-2ZJJT0JF5S",
};

const firebaseDevelopment = {
  apiKey: "AIzaSyBegqALs_-f-kILtZVJaD9WaClBT7nejD4",
  authDomain: "bulshfin.firebaseapp.com",
  projectId: "bulshfin",
  storageBucket: "bulshfin.appspot.com",
  messagingSenderId: "543650122549",
  appId: "1:543650122549:web:d6c8a1b9e754162f739a7c",
  measurementId: "G-2ZJJT0JF5S",
  // apiKey: "AIzaSyBrshw3BEyicE6-xnxvjy6xzB_JMe3kPGs",
  // projectId: "gift-me-that",
  // authDomain: "giftmethat.io",
  // storageBucket: "gift-me-that.appspot.com",
  // messagingSenderId: "115552501434",
  // appId: "1:115552501434:web:09e20056161c91d3fa4c83",
  // measurementId: "G-WV19D5RD7J"
};

// Initialize Firebase
firebase.initializeApp(firebaseProduction);
firebase.analytics();
const db = firebase.firestore();
const storage = firebase.storage();

export { firebase, storage, db };
