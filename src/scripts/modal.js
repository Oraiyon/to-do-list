import { makeProject, projects} from "../main";

const addProject= document.querySelector(".addProject");
const formModal= document.querySelector(".formModal");
const overlay= document.querySelector(".overlay");
const modalCancel= document.querySelector(".modalCancel");
const modalAdd= document.querySelector(".modalAdd");
const modalName= document.querySelector("#modalName");
const modalDescription= document.querySelector("#modalDescription");

export const addProjectButton = addProject.addEventListener("click", () => {
    openModal();
});

const openModal = () => {
    formModal.setAttribute("style", "display: flex;");
    overlay.setAttribute("style", "display:flex;");
};

export const closeModalButton= modalCancel.addEventListener("click", () => {
    closeModal();
});

const closeModal = () => {
    formModal.setAttribute("style", "display: none;");
    overlay.setAttribute("style", "display:none;");
};

export const submitModalButton= modalAdd.addEventListener("click", (e) => {
    let project1= makeProject(modalName.value, modalDescription.value);
    addProjectToProjects(project1);
    e.preventDefault();
    closeModal();
});

const addProjectToProjects= (project) => {
    projects.push(project);
};