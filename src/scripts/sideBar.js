import { projectCards, projects, submitEdit } from "../index";
import { modalAdd } from "./modal";

export const displayProjects = () => {
    projects.forEach(project => {
        const card= document.createElement("button");
        modalAdd.addEventListener("click", () => {
            card.remove();
        });
        submitEdit.addEventListener("click", () => {
            card.remove();
        });
        card.innerText= project.title;
        projectCards.appendChild(card);
    });
};