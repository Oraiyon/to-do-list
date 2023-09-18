import { projects } from "../index";
import { displayCurrentProject, displayEdits, hideMain, showMain } from "./main";

const projectCards= document.querySelector(".projectCards");

let currentProjectId = null;

export const displayProjects = () => {
    clearElement(projectCards);
    projects.forEach(project => {
        const card= document.createElement("button");
        card.classList.add("titleCard")
        card.id = project.id;
        card.innerText = project.title;
        projectCards.appendChild(card);

        card.addEventListener("click", () => {
            currentProjectId = project.id;
            displayProjects();
        });

        if (currentProjectId === project.id) {
            card.id = "currentProject";
        };

        const projectButtons= document.createElement("div");
        projectButtons.classList.add("projectButtons");
        projectCards.appendChild(projectButtons);

        const editProjectButton= document.createElement("button");
        editProjectButton.id= "editProject";
        editProjectButton.innerText= "Edit";
        projectButtons.appendChild(editProjectButton);

        editProjectButton.addEventListener("click", () => {
            displayEdits(currentProject);
        });

        const deleteProjectButton= document.createElement("button");
        deleteProjectButton.id = "deleteProject";
        deleteProjectButton.innerText= "Delete";
        projectButtons.appendChild(deleteProjectButton);

        deleteProjectButton.addEventListener("click", () => {
            card.remove();
            const i= project.index;
            projects.splice(i,1);
            deleteProjectButton.setAttribute("style", "display:none;");
            editProjectButton.setAttribute("style", "display:none;");
        });
    });

    const currentProject = projects.find(project => project.id === currentProjectId);

    displayMain(currentProject)
};

export const clearElement= (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };
};

const displayMain = (project) => {
    if (currentProjectId === null) {
        hideMain();
    } else {
        showMain();
        displayCurrentProject(project);
    };
}; 