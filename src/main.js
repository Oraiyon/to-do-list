import "./styles/main.css";
import "./styles/sideBar.css";
import "./styles/modal.css";
import { addProjectButton, closeModalButton, submitModalButton } from "./scripts/modal";
import { displayProjects } from "./scripts/sideBar";

export const projectCards= document.querySelector(".projectCards");

export const projects=[];

export const makeProject = (title, description) => {
    return {title, description};
};

export const addProjectToProjects= (project) => {
    projects.push(project);
    displayProjects();
};