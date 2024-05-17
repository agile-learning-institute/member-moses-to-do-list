// CREATE TASK FORM

import handleTaskSubmit, {
  handleNoteSubmit,
  handleProjectSubmit,
  handleTaskEdit,
} from "./handleForms";
import {
  dateStringToObject,
  getAllProjectTitles,
  getTask,
  getTaskProject,
} from "./taskManager";

export default function createTaskForm() {
  document.querySelector(".main").innerHTML = "";

  const addTaskForm = document.createElement("form");
  addTaskForm.setAttribute("id", "add-task-form");
  addTaskForm.setAttribute("action", "#");

  const label = document.createElement("label");
  label.classList.add("add-task-form-label");
  label.setAttribute("for", "add-task-form");
  label.textContent = "Add Task";

  const select = document.createElement("select");
  select.setAttribute("id", "set-project");
  select.setAttribute("name", "set-project");

  // dynamically generate project options from projects list
  let projectOptions = getAllProjectTitles();

  projectOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    // optionElement.setAttribute('value', option.toLowerCase().split(' ').join('-'));
    optionElement.setAttribute("value", option.title);
    optionElement.textContent = option.title;

    select.appendChild(optionElement);
  });

  //

  const titleInput = document.createElement("input");
  titleInput.classList.add("task-title");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "task-title");
  titleInput.setAttribute("placeholder", "Task Title");
  titleInput.required = true;

  const detailsInput = document.createElement("input");
  detailsInput.classList.add("task-details");
  detailsInput.setAttribute("type", "text");
  detailsInput.setAttribute("name", "task-details");
  detailsInput.setAttribute("placeholder", "Optional Details of task");

  const dateDueLabel = document.createElement("label");
  dateDueLabel.setAttribute("for", "date-due");

  const dateDueInput = document.createElement("input");
  dateDueInput.setAttribute("type", "date");
  dateDueInput.setAttribute("name", "date-due");
  dateDueInput.setAttribute("id", "date-due");
  dateDueInput.required = true;

  dateDueLabel.textContent = "Set Task Due Date: ";
  dateDueLabel.appendChild(dateDueInput);

  //priority label
  const priorityLabel = document.createElement("label");
  priorityLabel.classList.add("priority-fm");
  priorityLabel.textContent = "Priority:";
  //
  const lowInput = document.createElement("input");
  lowInput.setAttribute("type", "radio");
  lowInput.setAttribute("name", "priority");
  lowInput.setAttribute("id", "low");
  lowInput.setAttribute("value", "low");
  lowInput.required = true;
  lowInput.addEventListener("change", handlePriorityChange);

  const lowLabel = document.createElement("label");
  lowLabel.classList.add("priority-label", "low-fm");
  lowLabel.setAttribute("for", "low");
  lowLabel.textContent = "Low";
  //
  const mediumInput = document.createElement("input");
  mediumInput.setAttribute("type", "radio");
  mediumInput.setAttribute("name", "priority");
  mediumInput.setAttribute("id", "medium");
  mediumInput.setAttribute("value", "medium");
  mediumInput.required = true;
  mediumInput.addEventListener("change", handlePriorityChange);

  const mediumLabel = document.createElement("label");
  mediumLabel.classList.add("priority-label", "medium-fm");
  mediumLabel.setAttribute("for", "medium");
  mediumLabel.textContent = "Medium";
  //
  const highInput = document.createElement("input");
  highInput.setAttribute("type", "radio");
  highInput.setAttribute("name", "priority");
  highInput.setAttribute("id", "high");
  highInput.setAttribute("value", "high");
  highInput.required = true;
  highInput.addEventListener("change", handlePriorityChange);

  const highLabel = document.createElement("label");
  highLabel.classList.add("priority-label", "high-fm");
  highLabel.setAttribute("for", "high");
  highLabel.textContent = "High";

  priorityLabel.appendChild(lowInput);
  priorityLabel.appendChild(lowLabel);
  priorityLabel.appendChild(mediumInput);
  priorityLabel.appendChild(mediumLabel);
  priorityLabel.appendChild(highInput);
  priorityLabel.appendChild(highLabel);

  //submit button

  const submitTaskBtn = document.createElement("input");
  submitTaskBtn.setAttribute("type", "submit");
  submitTaskBtn.setAttribute("value", "submit");
  submitTaskBtn.setAttribute("id", "submit-task");

  // append elements to form
  addTaskForm.appendChild(label);
  addTaskForm.appendChild(select);
  addTaskForm.appendChild(titleInput);
  addTaskForm.appendChild(detailsInput);
  addTaskForm.appendChild(dateDueLabel);
  addTaskForm.appendChild(priorityLabel);
  addTaskForm.appendChild(submitTaskBtn);

  // add event listener to handle form submission
  addTaskForm.addEventListener("submit", handleTaskSubmit);

  document.querySelector(".main").appendChild(addTaskForm);
}

// Function to handle radio input change
function handlePriorityChange(event) {
  const target = event.target;
  const priorityLabels = document.querySelectorAll(".priority-label");

  priorityLabels.forEach((label) => {
    label.classList.remove(
      "low-fm-active",
      "medium-fm-active",
      "high-fm-active"
    );
  });

  // Add active class based on the selected priority radio input
  if (target.id === "low" && target.checked) {
    document.querySelector(".low-fm").classList.add("low-fm-active");
  } else if (target.id === "medium" && target.checked) {
    document.querySelector(".medium-fm").classList.add("medium-fm-active");
  } else if (target.id === "high" && target.checked) {
    document.querySelector(".high-fm").classList.add("high-fm-active");
  }
}

// EDIT TASK FORM
export function editTaskForm(taskID) {
  const taskToEdit = getTask(taskID);
  const taskProject = getTaskProject(taskID);

  createTaskForm();

  document.querySelector(".add-task-form-label").textContent = "Edit Task";
  document.querySelector("#set-project").value = taskProject.title;
  document.querySelector(".task-title").value = taskToEdit.title;
  document.querySelector(".task-details").value = taskToEdit.details;
  document.querySelector("#date-due").valueAsDate = dateStringToObject(
    taskToEdit.dateDue
  );
  document.getElementById(taskToEdit.priority.toLowerCase()).checked = true;
  document
    .getElementById(taskToEdit.priority.toLowerCase())
    .dispatchEvent(new Event("change"));

  document
    .querySelector("#add-task-form")
    .removeEventListener("submit", handleTaskSubmit);
  document
    .querySelector("#add-task-form")
    .addEventListener("submit", function (event) {
      const formData = new FormData(this);

      handleTaskEdit(formData, taskID);
      // event.preventDefault();
      this.reset();
    });
}

// CREATE NOTE FORM

export function addNoteForm() {
  document.querySelector(".main").innerHTML = "";

  const addNoteForm = document.createElement("form");
  addNoteForm.setAttribute("id", "add-note-form");
  addNoteForm.setAttribute("action", "#");

  const label = document.createElement("label");
  label.classList.add("add-note-form-label");
  label.setAttribute("for", "add-note-form");
  label.textContent = "Add Note";

  const titleInput = document.createElement("input");
  titleInput.classList.add("note-title");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "note-title");
  titleInput.setAttribute("placeholder", "Note Title");
  titleInput.required = true;

  const detailInput = document.createElement("textarea");
  detailInput.setAttribute("name", "note-details");
  detailInput.setAttribute("id", "note-details");
  detailInput.setAttribute("cols", "30");
  detailInput.setAttribute("rows", "10");
  detailInput.setAttribute("placeholder", "Note Details");
  detailInput.required = true;

  const submitNoteBtn = document.createElement("input");
  submitNoteBtn.setAttribute("type", "submit");
  submitNoteBtn.setAttribute("value", "submit");
  submitNoteBtn.setAttribute("id", "submit-note");

  //
  addNoteForm.appendChild(label);
  addNoteForm.appendChild(titleInput);
  addNoteForm.appendChild(detailInput);
  addNoteForm.appendChild(submitNoteBtn);

  // add event listener to handle note form submission
  addNoteForm.addEventListener("submit", function (event) {
    const formData = new FormData(this);

    handleNoteSubmit(formData);
    // event.preventDefault();

    addNoteForm.reset();
  });

  //
  document.querySelector(".main").appendChild(addNoteForm);
}

// CREATE PROJECT FORM

export function addProjectForm() {
  document.querySelector(".main").innerHTML = "";

  const addProjectForm = document.createElement("form");
  addProjectForm.setAttribute("id", "add-project-form");
  addProjectForm.setAttribute("action", "#");

  const label = document.createElement("label");
  label.classList.add("add-project-form-label");
  label.setAttribute("for", "add-project-form");
  label.textContent = "Create New Project";

  const titleInput = document.createElement("input");
  titleInput.classList.add("project-title");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "project-title");
  titleInput.setAttribute("placeholder", "Project Title");
  titleInput.required = true;

  const submitProjectBtn = document.createElement("input");
  submitProjectBtn.setAttribute("type", "submit");
  submitProjectBtn.setAttribute("value", "submit");
  submitProjectBtn.setAttribute("id", "submit-project");

  //
  addProjectForm.appendChild(label);
  addProjectForm.appendChild(titleInput);
  addProjectForm.appendChild(submitProjectBtn);

  // add event listener to handle project form submission
  addProjectForm.addEventListener("submit", function (event) {
    const formData = new FormData(this);

    handleProjectSubmit(formData);
    // event.preventDefault();

    addProjectForm.reset();
  });

  //
  document.querySelector(".main").appendChild(addProjectForm);
}
