import { makeProject, addProjectToProjects} from "../index";

const addProject= document.querySelector(".addProject");
const formModal= document.querySelector(".formModal");
const overlay= document.querySelector(".overlay");
const modalCancel= document.querySelector(".modalCancel");
export const modalAdd= document.querySelector(".modalAdd");
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
    let project= makeProject(modalName.value, modalDescription.value);
    addProjectToProjects(project);
    e.preventDefault();
    formModal.reset();
    closeModal();
});