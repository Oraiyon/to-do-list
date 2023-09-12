import { projectCards, projects } from "../index";
import { displayCurrentProject } from "./main";
import { modalAdd } from "./modal";

export const displayProjects = () => {
    projects.forEach(project => {
        const card= document.createElement("button");
        modalAdd.addEventListener("click", () => {
            card.remove();
        });
        card.innerText= project.title;
        projectCards.appendChild(card);
    });
};