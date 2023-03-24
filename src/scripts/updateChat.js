import "../components/AreaMessage";

export const updateChat = (data = {}) => {
  const container = document.querySelector(".dialog-container");
  container.innerHTML = "";

  if (data) {
    for (const message in data) {
      const messageContainer = document.createElement("area-message");
      messageContainer.data = data[message];

      container.appendChild(messageContainer);
    }
  }
};
