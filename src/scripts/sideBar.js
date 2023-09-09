import { projectCards, projects } from "../index";
import { modalAdd } from "./modal";

export const displayProjects = () => {
    projects.forEach(project => {
        const card= document.createElement("button");
        modalAdd.addEventListener("click", () => {
            card.remove();
        });
        activeProject(e);
        card.innerText= project.title;
        projectCards.appendChild(card);
    });
};

export const activeProject= (e) => {
    e.target.addEventListener("click", () => {
        
    });
};