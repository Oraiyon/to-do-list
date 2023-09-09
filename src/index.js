import "./styles/main.css";
import "./styles/sideBar.css";
import "./styles/modal.css";
import { addProjectButton, closeModalButton, submitModalButton } from "./scripts/modal";
import { displayProjects } from "./scripts/sideBar";
import { checkProjectEmpty, displayCurrentProject } from "./scripts/main";

export const projectCards= document.querySelector(".projectCards");
export const addTask= document.querySelector(".addTask");
export const mainPage= document.querySelector(".main");
export const projectName= document.querySelector(".projectName");
export const projectDescription= document.querySelector(".projectDescription");
export const tasks= document.querySelector(".tasks");
export const taskForm= document.querySelector(".taskForm");
export const cancelTaskForm= document.querySelector(".cancelTask");
export const taskDescription= document.querySelector(".taskDescription");

export const projects=[];

export const makeProject = (title, description) => {
    return {title, description};
};

checkProjectEmpty();

export const addProjectToProjects= (project) => {
    projects.push(project);
    displayCurrentProject(project);
    displayProjects();
    checkProjectEmpty();
};