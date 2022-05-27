const modalButton = document.querySelector("#toggleModal-button");
const modal = document.querySelector(".modal");

const modalButtonAxisX = document.querySelector("#open__modal-input__line-x");
const modalButtonAxisY = document.querySelector("#open__modal-input__line-y");

window.addEventListener("load", () => {
  modal.style.display = "none";
  modalButton.setAttribute("class", "open__modal-button-open");
});

function enable() {
  document.querySelector(".my__tasks-body").style.overflowY = "scroll";
}

function disable() {
  document.querySelector(".my__tasks-body").style.overflowY = "hidden";
}

toggleModal = () => {
  if (modal.style.display === "none") {
    modal.style.display = "block";
    modalButton.setAttribute("class", "open__modal-button-close");
    modalButtonAxisX.setAttribute("class", "open__modal-input__line-x-close");
    modalButtonAxisY.setAttribute("class", "open__modal-input__line-y-close");
    disable();
  } else {
    modal.style.display = "none";
    modalButton.setAttribute("class", "open__modal-button-open");
    modalButtonAxisX.setAttribute("class", "open__modal-input__line-x-open");
    modalButtonAxisY.setAttribute("class", "open__modal-input__line-y-open");
    enable();
  }
};

addEventListener("resize", () => {
  modal.style.display = "none";
  modalButton.setAttribute("class", "open__modal-button-open");
  modalButtonAxisX.setAttribute("class", "open__modal-input__line-x-open");
  modalButtonAxisY.setAttribute("class", "open__modal-input__line-y-open");
  enable();
});
