var buttonEl = document.querySelector("#save-task");



var createTaskHandler = function() {
    var tasksToDoEl = document.querySelector("#tasks-to-do");
    var listItemEl = document.createElement("li");
    listItemEl.textContent = "This is a new task.";
    listItemEl.className = "task-item";
    tasksToDoEl.appendChild(listItemEl);
    // alert("button clicked");
  }
buttonEl.addEventListener("click", createTaskHandler);
