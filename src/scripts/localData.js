function saveData() {
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

function loadData() {
  try {
    taskList = JSON.parse(localStorage.getItem("taskList")) ?? [];
  } catch {
    taskList = [];
  }
}
