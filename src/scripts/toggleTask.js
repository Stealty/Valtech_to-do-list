function validateTask(id) {
  completedList.innerHTML = "";
  incompletedList.innerHTML = "";
  const findTask = taskList.find((task) => task.id === id);
  findTask.value = !findTask.value;
  updateTaskList();
  saveData();
}
