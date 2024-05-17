import { v4 as uuid } from "uuid";

const allProjectsTemplate = [
  {
    title: "default",
    id: "11",
    tasks: [
      {
        title: "Learn Spring",
        details: "Complete a project with Spring Framework",
        priority: "Medium",
        dateDue: "2024-08-25",
        favorite: false,
        status: true,
        id: "1",
      },
      {
        title: "Hibernate",
        details: "Do some project using Hibernate",
        priority: "High",
        dateDue: "2024-08-23",
        favorite: true,
        status: true,
        id: "2",
      },
      {
        title: "Learn React",
        details: "Understand props, state, lifecycle, hooks",
        priority: "Low",
        dateDue: "2024-08-21",
        favorite: false,
        status: true,
        id: "3",
      },
    ],
  },
  {
    title: "Code To Learn",
    id: "12",
    tasks: [
      {
        title: "Python",
        details: "Research about python and concepts",
        priority: "Medium",
        dateDue: "2024-08-16",
        favorite: true,
        status: true,
        id: "4",
      },
      {
        title: "Hibernate",
        details: "Do some project using Hibernate",
        priority: "High",
        dateDue: "2024-08-17",
        favorite: true,
        status: true,
        id: "5",
      },
    ],
  },
  {
    title: "Platforms",
    id: "13",
    tasks: [
      {
        title: "Python",
        details: "Research about python and concepts",
        priority: "Medium",
        dateDue: "2024-08-06",
        favorite: false,
        status: true,
        id: "6",
      },
      {
        title: "React",
        details: "Good topic to research",
        priority: "Low",
        dateDue: "2024-08-03",
        favorite: true,
        status: true,
        id: "7",
      },
    ],
  },
  {
    title: "New Test",
    id: "14",
    tasks: [],
  },
];

const STORAGE_KEY = "allProjects";

// Function to save allProjects TEMPLATE to local storage
function saveAllProjectsTemplateToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allProjectsTemplate));
}

// Function to load allProjects from local storage if available or else load template
function loadAllProjectsFromLocalStorage() {
  const projects = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (projects) {
    return projects;
  } else {
    saveAllProjectsTemplateToLocalStorage();

    return allProjectsTemplate;
  }
}

// #####-LOAD allProjects when the page is loaded
let allProjects = loadAllProjectsFromLocalStorage();

// #####-SAVE allProjects to local storage
function saveAllProjectsToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allProjects));
}

// Tasks factory function
export function createTask(
  title,
  details,
  priority,
  dateDue,
  favorite,
  status = true,
  id = uuid()
) {
  return {
    title,
    details,
    priority,
    dateDue,
    favorite,
    status,
    status,
    id,
  };
}

// adds created task to Project
export function saveTaskToAllProjects(newTask, projectTitle) {
  const taskProject = allProjects.find(
    (project) => project.title === projectTitle
  );

  taskProject.tasks.push(newTask);

  saveAllProjectsToLocalStorage();
}

// Creates NEW Project and adds to allProjects
export function createAddProject(title) {
  let newProject = { title: title, id: uuid(), tasks: [] };

  allProjects.push(newProject);
  saveAllProjectsToLocalStorage();
}

// DELETE task
export function deleteTask(taskID) {
  allProjects.forEach((project) => {
    const tasks = project.tasks;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskID) {
        tasks.splice(i, 1);
        i--; // Adjust index to handle consecutive matches
      }
    }
  });

  saveAllProjectsToLocalStorage();
}

// EDIT task
export function editTask(
  projectTitle,
  title,
  details,
  dateDue,
  priority,
  taskID
) {
  const taskProject = allProjects.find((project) =>
    project.tasks.some((task) => task.id === taskID)
  );

  const task = taskProject.tasks.find((task) => task.id === taskID);

  if (taskProject.title !== projectTitle) {
    const newEditedTask = createTask(
      title,
      details,
      priority,
      dateDue,
      false,
      true
    );

    saveTaskToAllProjects(newEditedTask, projectTitle);

    deleteTask(taskID);
  } else {
    task.title = title;
    task.details = details;
    task.dateDue = dateDue;
    task.priority = priority;

    saveAllProjectsToLocalStorage();
  }

  // Find the new project by title
  const newProject = allProjects.find(
    (project) => project.title === projectTitle
  );

  saveAllProjectsToLocalStorage();
}

// return SPECIFIC task
export function getTask(taskID) {
  const task = getAllTasks().filter((task) => task.id === taskID);
  return task[0];
}

// return ALL tasks
export default function getAllTasks() {
  let allTasks = [];

  allProjects.forEach((project) => {
    project.tasks.forEach((task) => {
      allTasks.push(task);
    });
  });

  // @@@@@@@@@@@@ ALTERNATIVE USING 'REDUCE' @@@@@@@@@@@@@@
  // return allProjects.reduce((tasks, project) => [...tasks, ...project.tasks], []);
  return allTasks;
}

// return task project title and ID object
export function getTaskProject(taskID) {
  const taskProject = allProjects.find((project) =>
    project.tasks.some((task) => task.id === taskID)
  );

  return { title: taskProject.title, id: taskProject.id };
}

// return favorite tasks
export function getFavoriteTasks() {
  return getAllTasks().filter((task) => task.favorite === true);
}

// return ALL tasks COUNT ########
export function getAllTasksCount() {
  return getAllTasks().length;
}

// return favorite tasks COUNT #######
export function getFavoriteTasksCount() {
  return getFavoriteTasks().length;
}

// return ALL Projects Title & ID List
export function getAllProjectTitles() {
  let allProjectsTitles = [];

  allProjects.forEach((project) => {
    const projectObj = { title: project.title, id: project.id };
    allProjectsTitles.push(projectObj);
  });

  // @@@@@ ALTERNATIVE USING MAP
  //   return allProjects.map((project) => {projectTitle: project.title, projectID: project.id});
  return allProjectsTitles;
}

// return ALL PROJECTS COUNT #######
export function getAllProjectsCount() {
  return getAllProjectTitles().length;
}

// return dynamically project Tasks /////////////////////////////////////////////////////
export function getProjectTasks(projectID) {
  let gotProject = allProjects.filter((project) => project.id === projectID);

  return gotProject[0].tasks;
}

// return dynamically projects task COUNT #######
export function getProjectTaskCount(projectID) {
  return getProjectTasks(projectID).length;
}

// get and parse date into date object
export function dateStringToObject(dateString) {
  const dateComponents = dateString.split("-");

  const year = parseInt(dateComponents[0]);
  const month = parseInt(dateComponents[1]) - 1; // Months are zero-based
  const day = parseInt(dateComponents[2]);

  const dateDue = new Date(year, month, day);

  return dateDue;
}
