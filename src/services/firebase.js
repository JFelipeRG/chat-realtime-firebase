// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, push } from "firebase/database";
import { updateChat } from "../scripts/updateChat";

const firebaseConfig = {
  apiKey: "AIzaSyAUQfzk0V2-szDAkZasVtHj-hqKR8ZLoec",
  authDomain: "prueba-chat-cb024.firebaseapp.com",
  projectId: "prueba-chat-cb024",
  databaseURL: "https://prueba-chat-cb024-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "prueba-chat-cb024.appspot.com",
  messagingSenderId: "22634938757",
  appId: "1:22634938757:web:931eb8400383253da884ec"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const setValue = (data) => {
  push(ref(db, "chat/"), data);
};

export const observerData = () => {
  const chatRef = ref(db, "chat/");
  onValue(chatRef, (snapshot) => {
    const data = snapshot.val();
    updateChat(data);
  });
};
