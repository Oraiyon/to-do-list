import { projectCards, projects } from "../main";

export const displayProjects = () => {
    projects.forEach(project => {
        const card= document.createElement("button");
        // find way to remove previous cards
        card.innerText= project.title;
        projectCards.appendChild(card);
    });
};