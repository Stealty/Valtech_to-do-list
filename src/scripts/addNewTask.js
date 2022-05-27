const incompletedList = document.getElementById("taskList__list-incompleted");
const completedList = document.getElementById("taskList__list-completed");

const addTaskFormDesktop = document.querySelector(".addTask__Form--desktop");
const addTaskInputDesktop = document.querySelector(".addTask__input--desktop");

const addTaskFormModal = document.querySelector(".addTask_form--modal");
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
  newItem.setAttribute("for", "task__list__item-checkbox");
  newItem.setAttribute("class", "task__list__item-label");
  newItem.appendChild(document.createTextNode(taskName));
  taskItem.setAttribute("class", "task__list__item-incompleted");
  newInputCheckBox.setAttribute("class", "task__list__item-input");
  newInputCheckBox.setAttribute("id", "task__list__item-checkbox");
  newInputCheckBox.type = "checkbox";
  taskItem.addEventListener("click", () => validateTask(id));
  taskItem.appendChild(newInputCheckBox);
  taskItem.appendChild(newItem);
  incompletedList.appendChild(taskItem);
}

function createNewTaskItem_completed({ taskName, id }) {
  let taskItem = document.createElement("li");
  let newInputCheckBox = document.createElement("input");
  let newItem = document.createElement("label");
  newItem.setAttribute("for", "task__list__item-checkbox");
  newItem.setAttribute("class", "task__list__item-label");
  newItem.appendChild(document.createTextNode(taskName));
  taskItem.setAttribute("class", "task__list__item-completed");
  newInputCheckBox.setAttribute("class", "task__list__item-input");
  newInputCheckBox.setAttribute("id", "task__list__item-checkbox");
  newInputCheckBox.type = "checkbox";
  newInputCheckBox.checked = true;
  taskItem.addEventListener("click", () => validateTask(id));
  taskItem.appendChild(newInputCheckBox);
  taskItem.appendChild(newItem);
  completedList.appendChild(taskItem);
}

function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateId() {
  return Math.max(...taskList.map((task) => task.id), 0) + 1;
}
