const user = document.querySelector("#username");
const message = document.querySelector("#message").value;
const send = document.querySelector("#sendMessage");

export const sendMessge = () => {
  send.addEventListener("click", sendMessge);

  ref.set(user, message)
    .then(() => {
      console.log("Los datos se han enviado correctamente");
    })
    .catch((error) => {
      console.error("Se ha producido un error al enviar los datos:", error);
    });
};
