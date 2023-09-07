import "./styles/main.css";
import "./styles/sideBar.css";
import "./styles/modal.css";
import { addProjectButton, closeModalButton, submitModalButton } from "./scripts/modal";

export const projects=[];

export const makeProject = (title, description) => {
    return {title, description};
};