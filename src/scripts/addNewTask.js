const incompletedList = document.querySelector(".taskList__list--incompleted");
const completedList = document.querySelector(".taskList__list--completed");

const addTaskFormDesktop = document.querySelector(".addTask__Form--desktop");
const addTaskInputDesktop = document.querySelector(".addTask__input--desktop");

const addTaskFormModal = document.querySelector(".addTask__form--modal");
const addTaskInputModal = document.querySelector(".addTask__input--modal");

let taskList = [];

window.addEventListener("load", () => {
  loadData();
  updateTaskList();
});

function addNewTaskDesktop() {
  if (addTaskInputDesktop.value.trim() === "") {
    return alert("Please enter a task");
  } else {
    const taskName = document.querySelector(".addTask__input--desktop").value;
    const newTask = {
      id: generateId(),
      taskName: uppercaseFirstLetter(taskName),
      value: false,
    };
    taskList.push(newTask);
    addTaskInputModal.value = "";
    addTaskInputDesktop.value = "";
    modal.style.display = "none";
    modalButton.setAttribute("class", "open__modal-button-open");
    modalButtonAxisX.setAttribute("class", "open__modal-input__line-x-open");
    modalButtonAxisY.setAttribute("class", "open__modal-input__line-y-open");
    saveData();
    createNewTaskItem_incompleted(newTask);
    completedList.innerHTML = "";
    incompletedList.innerHTML = "";
    updateTaskList();
  }
}

function addNewTaskModal() {
  if (addTaskInputModal.value.trim() === "") {
    return alert("Please enter a task");
  } else {
    const taskName = document.querySelector(".addTask__input--modal").value;
    const newTask = {
      id: generateId(),
      taskName: uppercaseFirstLetter(taskName),
      value: false,
    };
    taskList.push(newTask);
    addTaskInputModal.value = "";
    addTaskInputDesktop.value = "";
    modal.style.display = "none";
    modalButton.setAttribute("class", "modal__button--open");
    modalButtonAxisX.setAttribute("class", "modal__inputLine__x--open");
    modalButtonAxisY.setAttribute("class", "modal__inputLine__y--open");
    saveData();
    createNewTaskItem_incompleted(newTask);
    completedList.innerHTML = "";
    incompletedList.innerHTML = "";
    updateTaskList();
  }
}

addTaskFormDesktop.addEventListener("submit", (event) => {
  event.preventDefault();
  if (addTaskInputDesktop.value !== "") {
    addNewTaskDesktop();
  } else {
    return alert("Please enter a task");
  }
});

addTaskFormModal.addEventListener("submit", (event) => {
  event.preventDefault();
  if (addTaskInputModal.value !== "") {
    addNewTaskModal();
  } else {
    return alert("Please enter a task");
  }
});

function createNewTaskItem_incompleted({ taskName, id }) {
  let taskItem = document.createElement("li");
  let newInputCheckBox = document.createElement("input");
  let newItem = document.createElement("label");
  newItem.setAttribute("for", "taskList__item--checkbox");
  newItem.setAttribute("class", "taskList__item--label");
  newItem.setAttribute("unselectable", "on");
  newItem.appendChild(document.createTextNode(taskName));
  taskItem.setAttribute("class", "taskList__item--incompleted");
  newInputCheckBox.setAttribute("class", "taskList__item--input");
  newInputCheckBox.setAttribute("id", "taskList__item--checkbox");
  newInputCheckBox.type = "checkbox";
  taskItem.addEventListener("click", () => validateTask(id));
  taskItem.appendChild(newInputCheckBox);
  taskItem.appendChild(newItem);
  incompletedList.appendChild(taskItem);
  enable();
}

function createNewTaskItem_completed({ taskName, id }) {
  let taskItem = document.createElement("li");
  let newInputCheckBox = document.createElement("input");
  let newItem = document.createElement("label");
  let deleteTaskButton = document.createElement("button");
  deleteTaskButton.setAttribute("class", "taskList__button--delete");
  deleteTaskButton.setAttribute("type", "button");
  deleteTaskButton.addEventListener("click", () => deleteTask(id));
  deleteTaskButton.appendChild(document.createTextNode("X"));
  newItem.setAttribute("for", "taskList__item--checkbox");
  newItem.setAttribute("class", "taskList__item--label");
  newItem.appendChild(document.createTextNode(taskName));
  taskItem.setAttribute("class", "taskList__item--completed");
  newInputCheckBox.setAttribute("class", "taskList__item--input");
  newInputCheckBox.setAttribute("id", "taskList__item--checkbox");
  newInputCheckBox.type = "checkbox";
  newInputCheckBox.checked = true;
  taskItem.addEventListener("click", () => validateTask(id));
  taskItem.appendChild(newInputCheckBox);
  taskItem.appendChild(newItem);
  taskItem.appendChild(deleteTaskButton);
  completedList.appendChild(taskItem);
}

function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateId() {
  return Math.max(...taskList.map((task) => task.id), 0) + 1;
}
