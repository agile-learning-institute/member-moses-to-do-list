import { loadAllTasks, loadProjectTasks, loadFavoriteTasks } from "./loadTasks";
import createTaskForm, { addNoteForm, addProjectForm } from "./loadForms";
import {
  getAllProjectTitles,
  getAllProjectsCount,
  getAllTasksCount,
  getProjectTaskCount,
  getFavoriteTasksCount,
} from "./taskManager";

export default function loadHome() {
  const container = document.querySelector("#container");

  renderLeftNav();
  renderMain();
  renderFooter();
  loadAllTasks();
}

function renderLeftNav() {
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  container.appendChild(content);

  const leftNav = document.createElement("div");
  leftNav.classList.add("left-nav", "open");

  renderHeader();
  renderNavItems();

  function renderHeader() {
    const logoUrl = "./images/icon.png";

    const header = document.createElement("header");

    const headerTitle = document.createElement("div");
    headerTitle.classList.add("title");

    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.setAttribute("alt", "logo");
    logo.setAttribute("src", logoUrl);

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task");
    addTaskBtn.setAttribute("type", "button");
    addTaskBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Add task`;
    addTaskBtn.addEventListener("click", createTaskForm);

    headerTitle.appendChild(logo);
    headerTitle.appendChild(addTaskBtn);

    header.appendChild(headerTitle);

    leftNav.appendChild(header);
  }

  function renderNavItems() {
    // ALL TASKS
    const allTasksCont = document.createElement("div");
    allTasksCont.classList.add("all-tasks", "nav-item");
    allTasksCont.addEventListener("click", loadAllTasks);

    const allTasksIcon = document.createElement("i");
    allTasksIcon.classList.add("fa-solid", "fa-list-check", "nav-icon");

    const allTasksTitle = document.createElement("div");
    allTasksTitle.classList.add("item");
    allTasksTitle.textContent = "All Tasks";

    const allTasksCount = document.createElement("span");
    allTasksCount.classList.add("count");
    allTasksCount.textContent = getAllTasksCount();

    allTasksCont.appendChild(allTasksIcon);
    allTasksCont.appendChild(allTasksTitle);
    allTasksCont.appendChild(allTasksCount);

    // FAVORITES
    const favoritesCont = document.createElement("div");
    favoritesCont.classList.add("favorites", "nav-item");
    favoritesCont.addEventListener("click", loadFavoriteTasks);

    const favoritesIcon = document.createElement("i");
    favoritesIcon.classList.add("fa-solid", "fa-star", "nav-icon");

    const favoritesTitle = document.createElement("div");
    favoritesTitle.classList.add("item");
    favoritesTitle.textContent = "Favorites";

    const favoritesCount = document.createElement("span");
    favoritesCount.classList.add("count");
    favoritesCount.textContent = getFavoriteTasksCount();

    favoritesCont.appendChild(favoritesIcon);
    favoritesCont.appendChild(favoritesTitle);
    favoritesCont.appendChild(favoritesCount);

    // PROJECTS
    const projectsCont = document.createElement("div");
    projectsCont.classList.add("projects", "nav-item");

    const projectsLeftGp = document.createElement("div");
    projectsLeftGp.classList.add("projects-left-gp");

    const projectsIcon = document.createElement("i");
    projectsIcon.classList.add("fa-solid", "fa-layer-group", "nav-icon");

    const projectsTitle = document.createElement("div");
    projectsTitle.classList.add("item");
    projectsTitle.textContent = "Projects";

    const projectsCount = document.createElement("span");
    projectsCount.classList.add("count");
    projectsCount.textContent = getAllProjectsCount();

    projectsLeftGp.appendChild(projectsIcon);
    projectsLeftGp.appendChild(projectsTitle);
    projectsLeftGp.appendChild(projectsCount);

    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("add-project-btn");
    addProjectBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 add-note-btn"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>`;
    addProjectBtn.addEventListener("click", addProjectForm);

    projectsCont.appendChild(projectsLeftGp);
    projectsCont.appendChild(addProjectBtn);

    // PROJECTS LIST
    const projectsListCont = document.createElement("div");
    projectsListCont.classList.add("projects-title", "nav-item");

    // load project list elements dynamically from projects list /////////
    let projectsList = getAllProjectTitles();

    projectsList.forEach((project) => {
      const projectEle = document.createElement("div");
      projectEle.classList.add("project");
      projectEle.textContent = project.title;
      projectEle.addEventListener("click", function () {
        loadProjectTasks(project.id);
      });

      const projectEleCount = document.createElement("span");
      projectEleCount.classList.add("count");
      projectEleCount.textContent = getProjectTaskCount(project.id); //

      projectEle.appendChild(projectEleCount);

      projectsListCont.appendChild(projectEle);
    });

    // NOTES
    const notesCont = document.createElement("div");
    notesCont.classList.add("notes", "nav-item");

    const notesLeftGp = document.createElement("div");
    notesLeftGp.classList.add("notes-left-gp");

    const notesIcon = document.createElement("i");
    notesIcon.classList.add("fa-solid", "fa-note-sticky", "nav-icon");

    const notesTitle = document.createElement("div");
    notesTitle.classList.add("item");
    notesTitle.textContent = "Notes";

    const notesCount = document.createElement("span");
    notesCount.classList.add("count");
    notesCount.textContent = "";

    notesLeftGp.appendChild(notesIcon);
    notesLeftGp.appendChild(notesTitle);
    notesLeftGp.appendChild(notesCount);

    const addNoteBtn = document.createElement("button");
    addNoteBtn.classList.add("add-note-btn");
    addNoteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 add-note-btn"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>`;
    addNoteBtn.addEventListener("click", addNoteForm);

    notesCont.appendChild(notesLeftGp);
    notesCont.appendChild(addNoteBtn);

    // ATTACH NAV ITEMS TO LEFT NAV

    leftNav.appendChild(allTasksCont);
    leftNav.appendChild(favoritesCont);
    leftNav.appendChild(projectsCont);
    leftNav.appendChild(projectsListCont);
    leftNav.appendChild(notesCont);
  }

  content.appendChild(leftNav);
}

function renderMain() {
  const main = document.createElement("div");
  main.classList.add("main");

  content.appendChild(main);

  // loadTask(main);

  // document.querySelector('#content').appendChild(main);
}

function renderFooter() {
  const user = "WodPachua";
  const url = "https://github.com/WodPachua/";

  const footer = document.createElement("footer");

  const githubUser = document.createElement("a");
  githubUser.textContent = user;
  githubUser.setAttribute("href", url);

  const githubLink = document.createElement("a");
  githubLink.setAttribute("href", url);
  githubLink.setAttribute("target", "_blank");
  githubLink.classList.add("github-link");

  const githubIcon = document.createElement("span");
  githubIcon.classList.add("fab", "fa-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(githubUser);
  footer.appendChild(githubLink);

  container.appendChild(footer);
}
