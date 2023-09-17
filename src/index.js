import "./styles/main.css";
import "./styles/sideBar.css";
import "./styles/modal.css";
import { addProjectButton, closeModalButton, submitModalButton, modalAdd } from "./scripts/modal";

export const projectCards= document.querySelector(".projectCards");
export const addTask= document.querySelector(".addTask");
export const mainPage= document.querySelector(".main");
export const projectName= document.querySelector(".projectName");
export const projectDescription= document.querySelector(".projectDescription");
export const tasks= document.querySelector(".tasks");
export const taskForm= document.querySelector(".taskForm");
export const cancelTaskForm= document.querySelector(".cancelTask");
export const addTaskToProject= document.querySelector(".submitTask");
export const taskDescription= document.querySelector("#taskDescription");
export const dueDate= document.querySelector("#dueDate");
export const editProject= document.querySelector(".editProject");
export const cancelEdit= document.querySelector(".cancelEdit");
export const submitEdit= document.querySelector(".submitEdit");
export const newName= document.querySelector("#newName");
export const newDescription= document.querySelector("#newDescription");

export const projects= [];

export const makeProject = (title, description) => {
    const id= Date.now().toString();
    const tasks= [];
    return {id, title, description, tasks};
};

export const createTaskObject= (description, dueDate) => {
    return {description, dueDate};
};