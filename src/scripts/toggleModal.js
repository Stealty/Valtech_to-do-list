const modalButton = document.querySelector("#toggleModal-button");
const modal = document.querySelector(".modal");

const modalButtonAxisX = document.querySelector("#open__modal-input__line-x");
const modalButtonAxisY = document.querySelector("#open__modal-input__line-y");

window.addEventListener("load", () => {
  modal.style.display = "none";
  modalButton.setAttribute("class", "open__modal-button-open");
});

toggleModal = () => {
  if (modal.style.display === "none") {
    modal.style.display = "block";
    modalButton.setAttribute("class", "open__modal-button-close");
    modalButtonAxisX.setAttribute("class", "open__modal-input__line-x-close");
    modalButtonAxisY.setAttribute("class", "open__modal-input__line-y-close");
  } else {
    modal.style.display = "none";
    modalButton.setAttribute("class", "open__modal-button-open");
    modalButtonAxisX.setAttribute("class", "open__modal-input__line-x-open");
    modalButtonAxisY.setAttribute("class", "open__modal-input__line-y-open");
  }
};
