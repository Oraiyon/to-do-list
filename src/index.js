import "./styles/main.css";
import "./styles/sideBar.css";
import "./styles/modal.css";
import { addProjectButton, closeModalButton, submitModalButton, modalAdd } from "./scripts/modal";

export const projects= [];

export const makeProject = (title, description) => {
    const id= Date.now().toString();
    const tasks= [];
    return {id, title, description, tasks};
};

export const createTaskObject= (description, dueDate) => {
    return {description, dueDate};
};