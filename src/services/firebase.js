// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, push } from "firebase/database";
import { updateChat } from "../scripts/updateChat";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY || "VITE_API_KEY_VACIO",
  authDomain: import.meta.env.VITE_AUTH_DOMAIN || "VITE_AUTH_DOMAIN_VACIO",
  projectId: import.meta.env.VITE_PROJECT_ID || "VITE_PROJECT_ID_VACIO",
  databaseURL: import.meta.env.VITE_FB_URL || "VITE_FB_URL_VACIO",
  appId: import.meta.env.VITE_APP_ID || "VITE_APP_ID_VACIO"
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
