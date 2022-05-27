function validateTask(id) {
  try {
    const findTask = taskList.find((task) => task.id === id);
    findTask.value = !findTask.value;
    updateTaskList();
    saveData();
  } catch (err) {}
}

function deleteTask(id) {
  const findTask = taskList.find((task) => task.id === id);
  taskList.splice(taskList.indexOf(findTask), 1);
  updateTaskList();
  saveData();
}
