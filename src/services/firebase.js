// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FSWatcher } from "vite";
import { getDatabase, ref, set, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAW9ubxhESZWYOrssN_L6x7zyWh3KWIpI",
  authDomain: "chatduck-286cb.firebaseapp.com",
  databaseURL: "https://chatduck-286cb-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "chatduck-286cb",
  storageBucket: "chatduck-286cb.appspot.com",
  messagingSenderId: "438770588715",
  appId: "1:438770588715:web:836c7933d69b8ba8df9e6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const setValue = (data) => {
  set(ref(db, "chat/"), data);
};

const chatRef = ref(db, "chat/");
onValue(chatRef, (snapshot) => {
  const data = snapshot.val();
  updateChat(data);
});
