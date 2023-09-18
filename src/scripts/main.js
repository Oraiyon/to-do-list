import { createTaskObject } from "../index";
import { formatDistance } from "date-fns";
import { displayProjects } from "./sideBar";
import { clearElement } from "./sideBar";

const addTask = document.querySelector(".addTask");
const mainPage= document.querySelector(".main");
const projectName= document.querySelector(".projectName");
const projectDescription= document.querySelector(".projectDescription");
const tasks= document.querySelector(".tasks");
const taskForm= document.querySelector(".taskForm");
const cancelTaskForm= document.querySelector(".cancelTask");
const addTaskToProject= document.querySelector(".submitTask");
const taskDescription= document.querySelector("#taskDescription");
const dueDate= document.querySelector("#dueDate");
const editProject= document.querySelector(".editProject");
const cancelEdit= document.querySelector(".cancelEdit");
const submitEdit= document.querySelector(".submitEdit");
const newName= document.querySelector("#newName");
const newDescription= document.querySelector("#newDescription");

export const hideMain = () => {
    mainPage.setAttribute("style", "display:none;");
};

export const showMain = () => {
    mainPage.setAttribute("style", "display: flex;");
};

export const displayCurrentProject = (project) => {
    displayTitle(project);
    displayDescription(project);
    displayCurrentTasks(project);
    openTaskFormButton();
    closeTaskFormButton();
    submitTask(project);
};

const displayTitle = (project) => {
    clearElement(projectName)
    const currentTitle= document.createElement("h2");
    currentTitle.innerText= project.title;
    projectName.appendChild(currentTitle);
};

const displayDescription = (project) => {
    clearElement(projectDescription)
    const currentDescription= document.createElement("div");
    currentDescription.innerText= project.description;
    projectDescription.appendChild(currentDescription);
};

const displayCurrentTasks = (project) => {
    clearElement(tasks);
    addTask.setAttribute("style", "display:;");
    Object.values(project.tasks).forEach(task => {
        const currentTasks= document.createElement("div");
        addTaskToProject.addEventListener("click", () => {
            currentTasks.remove();
        });
        currentTasks.classList.add("projectTasks");
        tasks.appendChild(currentTasks);

        const taskInfo= document.createElement("div");
        taskInfo.classList.add("taskInfo");
        currentTasks.appendChild(taskInfo);

        const toDo= document.createElement("div");
        toDo.innerText= task.description;
        taskInfo.appendChild(toDo);

        const toDoDate= document.createElement("div");
        const newDate= task.dueDate.split("-");
        toDoDate.innerText= formatDistance(new Date(newDate[0], (newDate[1]-1), newDate[2]), new Date());
        taskInfo.appendChild(toDoDate);

        const taskControls= document.createElement("div");
        taskControls.classList.add("taskControls");
        currentTasks.appendChild(taskControls);

        const deleteTaskButton= document.createElement("button");
        deleteTaskButton.classList.add("deleteTask");
        deleteTaskButton.innerText= "Delete";
        taskControls.appendChild(deleteTaskButton);

        deleteTaskButton.addEventListener("click", () => {
            currentTasks.remove();
            const i= Object.values(project.tasks).indexOf(task);
            project.tasks.splice(i,1);
            console.log(project);
        });
    });
    console.log(project);
};

const openTaskFormButton= () => {
    addTask.addEventListener("click", (e) => {
        e.preventDefault();
        addTask.setAttribute("style", "display:none;");
        taskForm.setAttribute("style", "display:flex;");
    });
};

const closeTaskFormButton= () => {
    cancelTaskForm.addEventListener("click", (e) => {
        closeTasks(e);
    });
};

const submitTask= (project) => {
    addTaskToProject.addEventListener("click", (e)=> {
        pushToProjects(project);
        displayCurrentTasks(project);
        taskForm.reset();
        e.preventDefault();
        closeTasks(e);
    });
};

const pushToProjects= (project) => {
    const projectToDo= createTaskObject(taskDescription.value, dueDate.value);
    project.tasks.push(projectToDo);
};

const closeTasks= (e) => {
    taskForm.reset();
    e.preventDefault();
    addTask.setAttribute("style", "display:;");
    taskForm.setAttribute("style", "display:none;");
};

export const displayEdits= (project) => {
    projectName.setAttribute("style", "display: none;");
    projectDescription.setAttribute("style", "display: none;");
    editProject.setAttribute("style", "display:flex");
    editFormActions(project);
};

const closeEditFormButton= () => {
    cancelEdit.addEventListener("click", (e) => {
        editProject.reset();
        e.preventDefault();
        closeEdits();
    });
};

const submitEditFormButton= (project) => {
    submitEdit.addEventListener("click", (e) => {
        modifyProject(project);
        editProject.reset();
        e.preventDefault();
        closeEdits();
    });
};

const editFormActions = (project) => {
    closeEditFormButton();
    submitEditFormButton(project);
};

const modifyProject= (project) => {
    if (newName.value.length > 0 && newDescription.value.length > 0) {
        project.title= newName.value;
        project.description= newDescription.value;
        displayTitle(project);
        displayDescription(project);
        displayProjects(project);
    } else if (newName.value.length > 0 && newDescription.value.length === 0) {
        project.title= newName.value;
        displayTitle(project);
        displayDescription(project);
        displayProjects(project);
    } else if (newName.value.length === 0 && newDescription.value.length > 0) {
        project.description= newDescription.value;
        displayTitle(project);
        displayDescription(project);
    } else {
        displayTitle(project);
        displayDescription(project);
    };
};

const closeEdits= () => {
    projectName.setAttribute("style", "display:;");
    projectDescription.setAttribute("style", "display:;");
    editProject.setAttribute("style", "display:none;");
};