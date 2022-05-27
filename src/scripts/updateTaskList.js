function updateTaskList() {
  completedList.innerHTML = "";
  incompletedList.innerHTML = "";
  taskList.sort((a, b) => a.taskName.localeCompare(b.taskName));
  taskList.forEach((task) => {
    if (task.value === false) {
      createNewTaskItem_incompleted(task);
    }
    if (task.value === true) {
      createNewTaskItem_completed(task);
    }
  });
}
