import getAllTasks, {
  getProjectTasks,
  getFavoriteTasks,
  deleteTask,
} from "./taskManager";

export function loadAllTasks() {
  document.querySelector(".main").innerHTML = "";

  const allTasks = getAllTasks();

  allTasks.map((task) => {
    loadTask(task.title, task.details, task.dateDue, task.priority);
  });
}

export function loadFavoriteTasks() {
  document.querySelector(".main").innerHTML = "";

  const favoriteTasks = getFavoriteTasks();

  favoriteTasks.map((task) => {
    loadTask(task.title, task.details, task.dateDue, task.priority);
  });
}

// refactor to load project tasks dynamically ////////////////////////////////////////////############
export function loadProjectTasks(projectTitle) {
  document.querySelector(".main").innerHTML = "";

  const projectTasks = getProjectTasks(projectTitle);

  projectTasks.map((task) => {
    loadTask(task.title, task.details, task.dateDue, task.priority);
  });
}

function loadTask(title, detail, dateDue, priority) {
  const taskCont = document.createElement("div");
  taskCont.classList.add("task");

  // left group
  const taskLeftGp = document.createElement("div");
  taskLeftGp.classList.add("left-group");

  const taskStatus = document.createElement("div");
  taskStatus.classList.add("status");

  const statusInput = document.createElement("input");
  statusInput.setAttribute("type", "checkbox");
  statusInput.setAttribute("name", "status");
  statusInput.setAttribute("id", "status");

  taskStatus.appendChild(statusInput);

  const taskDetailsCont = document.createElement("div");
  taskDetailsCont.classList.add("task-details");

  const taskTitle = document.createElement("div");
  taskTitle.classList.add("title");
  taskTitle.textContent = title;

  const taskDetail = document.createElement("div");
  taskDetail.classList.add("details");
  taskDetail.textContent = detail.slice(0, 35) + "...";

  taskDetailsCont.appendChild(taskTitle);
  taskDetailsCont.appendChild(taskDetail);

  taskLeftGp.appendChild(taskStatus);
  taskLeftGp.appendChild(taskDetailsCont);

  // right group
  const taskRightGp = document.createElement("div");
  taskRightGp.classList.add("right-group");

  const taskDueDate = document.createElement("div");
  taskDueDate.classList.add("date-due");
  taskDueDate.textContent = dateDue;

  const taskPriority = document.createElement("div");
  taskPriority.classList.add("priority", `${priority.toLowerCase()}`);
  taskPriority.textContent =
    priority === "Medium" || priority === "medium" ? "Med" : priority;

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.classList.add("delete");
  deleteTaskBtn.setAttribute("id", title);
  // add event listener to delete task
  deleteTaskBtn.addEventListener("click", function () {
    deleteTask(title, detail);
    location.reload();
  });

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash");

  deleteTaskBtn.appendChild(deleteIcon);

  taskRightGp.appendChild(taskDueDate);
  taskRightGp.appendChild(taskPriority);
  taskRightGp.appendChild(deleteTaskBtn);
  //

  taskCont.appendChild(taskLeftGp);
  taskCont.appendChild(taskRightGp);

  document.querySelector(".main").appendChild(taskCont);
}
