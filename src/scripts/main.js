import { projects, addTask, mainPage, projectName, projectDescription, tasks, taskForm, cancelTaskForm, taskDescription } from "../index";
import { modalAdd } from "./modal";

const noProject= document.createElement("h2");

export const checkProjectEmpty = () => {
    if (projects.length === 0) {
        addTask.setAttribute("style", "display:none;");
        noProject.classList.add("noProject");
        noProject.innerText = "No Projects";
        mainPage.appendChild(noProject);
    } else {
        noProject.setAttribute("style", "display:none;");
    };
};

export const displayCurrentProject = (project) => {
    displayTitle(project);
    displayDescription(project);
    displayCurrentTasks();
    addTaskForm();
    closeTaskForm();
};

const displayTitle = (project) => {
    const currentTitle= document.createElement("h2");
    currentTitle.innerText= project.title;
    modalAdd.addEventListener("click", () => {
        currentTitle.remove();
    });
    projectName.appendChild(currentTitle);
};

const displayDescription = (project) => {
    const currentDescription= document.createElement("div");
    currentDescription.innerText= project.description;
    modalAdd.addEventListener("click", () => {
        currentDescription.remove();
    });
    projectDescription.appendChild(currentDescription);
};

const displayCurrentTasks = () => {
    addTask.setAttribute("style", "display:;");
    const currentTasks= document.createElement("div");
    tasks.appendChild(currentTasks);
};

const addTaskForm= () => {
    addTask.addEventListener("click", (e) => {
        e.preventDefault();
        addTask.setAttribute("style", "display:none;");
        taskForm.setAttribute("style", "display:flex;");
    });
};

const closeTaskForm= () => {
    cancelTaskForm.addEventListener("click", (e) => {
        e.preventDefault();
        addTask.setAttribute("style", "display:;");
        taskForm.setAttribute("style", "display:none;");
    });
};