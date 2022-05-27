const modalButton = document.querySelector("#toggleModal--button");
const modal = document.querySelector(".modal");

const modalButtonAxisX = document.querySelector("#modal__inputLine--x");
const modalButtonAxisY = document.querySelector("#modal__inputLine--y");

window.addEventListener("load", () => {
  modal.style.display = "none";
  modalButton.setAttribute("class", "modal__button--open");
});

function enable() {
  document.querySelector(".myTasks__body").style.overflowY = "scroll";
}

function disable() {
  document.querySelector(".myTasks__body").style.overflowY = "hidden";
}

toggleModal = () => {
  if (modal.style.display === "none") {
    modal.style.display = "block";
    modalButton.setAttribute("class", "modal__button--close");
    modalButtonAxisX.setAttribute("class", "modal__inputLine__x--close");
    modalButtonAxisY.setAttribute("class", "modal__inputLine__y--close");
    disable();
  } else {
    modal.style.display = "none";
    modalButton.setAttribute("class", "modal__button--open");
    modalButtonAxisX.setAttribute("class", "modal__inputLine__x--open");
    modalButtonAxisY.setAttribute("class", "modal__inputLine__y--open");
    enable();
  }
};

addEventListener("resize", () => {
  modal.style.display = "none";
  modalButton.setAttribute("class", "modal__button--open");
  modalButtonAxisX.setAttribute("class", "modal__inputLine__x--open");
  modalButtonAxisY.setAttribute("class", "modal__inputLine__y--open");
  enable();
});
