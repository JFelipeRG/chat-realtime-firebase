import { setValue } from "../services/firebase.js";

const user = document.querySelector(".author");
const message = document.querySelector(".text");
const send = document.querySelector("form");

send.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = {
    nickname: user.value,
    messageUSer: message.value
  };

  setValue(data);
});
