import {
  createAddProject,
  createTask,
  editTask,
  saveTaskToAllProjects,
} from "./taskManager";

export default function handleTaskSubmit(event) {
  const formData = new FormData(this);

  // handleTaskSubmit(formData);
  // event.preventDefault();

  // addTaskForm.reset();

  const formDetails = {};

  for (let pair of formData.entries()) {
    formDetails[pair[0]] = pair[1];
  }

  const {
    "set-project": projectTitle,
    "task-title": title,
    "task-details": details,
    "date-due": dateDue,
    priority,
  } = formDetails;

  const newTask = createTask(title, details, priority, dateDue, false, true);

  saveTaskToAllProjects(newTask, projectTitle);

  location.reload();
  // loadProjectTasks(project);
}

export function handleTaskEdit(formData, taskID) {
  const formDetails = {};

  for (let pair of formData.entries()) {
    formDetails[pair[0]] = pair[1];
  }

  const {
    "set-project": projectTitle,
    "task-title": title,
    "task-details": details,
    "date-due": dateDue,
    priority,
  } = formDetails;

  editTask(projectTitle, title, details, dateDue, priority, taskID);

  location.reload();
  // loadProjectTasks(project);
}

export function handleNoteSubmit(formData) {
  const formDetails = {};

  for (let pair of formData.entries()) {
    formDetails[pair[0]] = pair[1];
  }

  console.table(formDetails);
  // NOT YET IMPLEMENTED @@@@@@@@@@@@@##############################################

  location.reload();
}

export function handleProjectSubmit(formData) {
  const formDetails = {};

  for (let pair of formData.entries()) {
    formDetails[pair[0]] = pair[1];
  }

  const { "project-title": title } = formDetails;

  createAddProject(title);

  // loadProjectTasks(title);
  location.reload();
}
