import { projects } from "../index";
import { displayEdits } from "./main";

const projectCards= document.querySelector(".projectCards");

let currentProject = null;

export const displayProjects = () => {
    clearCards(projectCards);
    projects.forEach(project => {
        const card= document.createElement("button");
        card.classList.add("titleCard")
        card.id = project.id;
        card.innerText = project.title;
        projectCards.appendChild(card);
        
        if (project.id === currentProject) {
            card.id = "currentProject";
        };

        card.addEventListener("click", () => {
            currentProject = project.id;
            displayProjects();
        });

        const projectButtons= document.createElement("div");
        projectButtons.classList.add("projectButtons");
        projectCards.appendChild(projectButtons);

        const editProjectButton= document.createElement("button");
        editProjectButton.id= "editProject";
        editProjectButton.innerText= "Edit";
        projectButtons.appendChild(editProjectButton);

        editProjectButton.addEventListener("click", displayEdits);

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
};

const clearCards= (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };
};