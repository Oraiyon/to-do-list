import { projects, addTask, mainPage, projectName, projectDescription, tasks, taskForm, cancelTaskForm, addTaskToProject, createTaskObject, editProject, editPen, cancelEdit, submitEdit} from "../index";
import { modalAdd } from "./modal";
import { formatDistance } from "date-fns";

const noProject= document.createElement("h2");

export const checkProjectEmpty = () => {
    if (projects.length === 0) {
        addTask.setAttribute("style", "display:none;");
        noProject.classList.add("noProject");
        noProject.innerText = "No Projects";
        mainPage.appendChild(noProject);
    } else {
        noProject.setAttribute("style", "display:none;");
    };
};

export const displayCurrentProject = (project) => {
    displayTitle(project);
    displayDescription(project);
    displayCurrentTasks(project);
    submitTask(project);
    openTaskFormButton();
    closeTaskFormButton();
    showEditPen();
    displayEdits();
    closeEditFormButton();
    SubmitEditFormButton();
};

const displayTitle = (project) => {
    const currentTitle= document.createElement("h2");
    currentTitle.innerText= project.title;
    modalAdd.addEventListener("click", () => {
        currentTitle.remove();
    });
    projectName.appendChild(currentTitle);
};

const displayDescription = (project) => {
    const currentDescription= document.createElement("div");
    currentDescription.innerText= project.description;
    modalAdd.addEventListener("click", () => {
        currentDescription.remove();
    });
    projectDescription.appendChild(currentDescription);
};

const displayCurrentTasks = (project) => {
    addTask.setAttribute("style", "display:;");
    Object.values(project.tasks).forEach(task => {
        const currentTasks= document.createElement("div");
        addTaskToProject.addEventListener("click", () => {
            currentTasks.remove();
        });
        currentTasks.classList.add("projectTasks");
        tasks.appendChild(currentTasks);
        const toDo= document.createElement("div");
        toDo.innerText= task.description;
        currentTasks.appendChild(toDo);
        const toDoDate= document.createElement("div");
        const newDate= task.dueDate.split("-");
        toDoDate.innerText= formatDistance(new Date(newDate[0], (newDate[1]-1), newDate[2]), new Date(), {addSuffix: true});
        currentTasks.appendChild(toDoDate);
    });
};

const openTaskFormButton= () => {
    addTask.addEventListener("click", (e) => {
        e.preventDefault();
        addTask.setAttribute("style", "display:none;");
        taskForm.setAttribute("style", "display:flex;");
    });
};

const closeTaskFormButton= () => {
    cancelTaskForm.addEventListener("click", (e) => {
        taskForm.reset();
        e.preventDefault();
        closeTasks();
    });
};

const submitTask= (project) => {
    addTaskToProject.addEventListener("click", (e)=> {
        checkTaskLength(project);
        displayCurrentTasks(project);
        taskForm.reset();
        e.preventDefault();
        closeTasks();
    });
};

const closeTasks= () => {
    addTask.setAttribute("style", "display:;");
    taskForm.setAttribute("style", "display:none;");
};

const checkTaskLength= (project) => {
    if (taskDescription.value.length > 0) {
        pushToProjects(project);
    };
};

const pushToProjects= (project) => {
    const projectToDo= createTaskObject(taskDescription.value, dueDate.value)
    project.tasks.push(projectToDo);
};

const showEditPen= () => {
    editPen.setAttribute("style", "display:flex;");
};

const displayEdits= () => {
    editPen.addEventListener("click", () => {
        projectName.setAttribute("style", "display: none;");
        projectDescription.setAttribute("style", "display: none;");
        editPen.setAttribute("style", "display: none;");
        editProject.setAttribute("style", "display:flex");
    });
};

const closeEditFormButton= () => {
    cancelEdit.addEventListener("click", (e) => {
        editProject.reset();
        e.preventDefault();
        closeEdits();
    });
};

const SubmitEditFormButton= () => {
    cancelEdit.addEventListener("click", (e) => {
        // EDIT INPUTS
        editProject.reset();
        e.preventDefault();
        closeEdits();
    });
};

const closeEdits= () => {
    projectName.setAttribute("style", "display:;");
    projectDescription.setAttribute("style", "display:;");
    editPen.setAttribute("style", "display:flex;");
    editProject.setAttribute("style", "display:none;");
};