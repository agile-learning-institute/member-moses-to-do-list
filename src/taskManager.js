const allProjectsTemplate = [
  {
    title: "default",
    tasks: [
      {
        title: "Learn Spring",
        details: "Complete a project with Spring Framework",
        priority: "Medium",
        dateDue: "25-08-2024",
        favorite: false,
        status: true,
      },
      {
        title: "Hibernate",
        details: "Do some project using Hibernate",
        priority: "High",
        dateDue: "25-08-2024",
        favorite: true,
        status: true,
      },
      {
        title: "Learn React",
        details: "Understand props, state, lifecycle, hooks",
        priority: "Low",
        dateDue: "25-08-2024",
        favorite: false,
        status: true,
      },
    ],
  },
  {
    title: "Code To Learn",
    tasks: [
      {
        title: "Python",
        details: "Research about python and concepts",
        priority: "Medium",
        dateDue: "25-08-2024",
        favorite: true,
        status: true,
      },
      {
        title: "Hibernate",
        details: "Do some project using Hibernate",
        priority: "High",
        dateDue: "25-08-2024",
        favorite: true,
        status: true,
      },
    ],
  },
  {
    title: "Platforms",
    tasks: [
      {
        title: "Python",
        details: "Research about python and concepts",
        priority: "Medium",
        dateDue: "25-08-2024",
        favorite: false,
        status: true,
      },
      {
        title: "React",
        details: "Good topic to research",
        priority: "Low",
        dateDue: "25-08-2024",
        favorite: true,
        status: true,
      },
    ],
  },
  {
    title: "New Test",
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
  status = true
) {
  return {
    title,
    details,
    priority,
    dateDue,
    favorite,
    status,
    status,
  };
}

// adds created task to Project
export function saveTaskToAllProjects(newTask, project) {
  let indexOfProject = getAllProjectTitles().indexOf(project);

  allProjects[indexOfProject].tasks.push(newTask);
  saveAllProjectsToLocalStorage();
}

// Creates NEW Project and adds to allProjects
export function createAddProject(title) {
  let newProject = { title: title, tasks: [] };

  allProjects.push(newProject);
  saveAllProjectsToLocalStorage();
}

// DELETE task
export function deleteTask(taskTitle, taskDetail) {
  allProjects.forEach((project) => {
    const tasks = project.tasks;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].title === taskTitle && tasks[i].details === taskDetail) {
        tasks.splice(i, 1);
        i--; // Adjust index to handle consecutive matches
      }
    }
  });

  saveAllProjectsToLocalStorage();
  // console.log(getAllTasksCount());
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

// return ALL Projects List
export function getAllProjectTitles() {
  let allProjectsTitles = [];

  allProjects.forEach((project) => {
    allProjectsTitles.push(project.title);
  });

  // @@@@@ ALTERNATIVE USING MAP
  // return allProjects.map((project) => project.title);
  return allProjectsTitles;
}

// return ALL PROJECTS COUNT #######
export function getAllProjectsCount() {
  return getAllProjectTitles().length;
}

// return dynamically project Tasks /////////////////////////////////////////////////////
export function getProjectTasks(projectTitle) {
  let projectTasks = allProjects.filter(
    (project) => project.title === projectTitle
  );

  return projectTasks[0].tasks;
}
// return dynamically projects task COUNT #######
export function getProjectTaskCount(projectTitle) {
  return getProjectTasks(projectTitle).length;
}
