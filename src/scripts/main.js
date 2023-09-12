import { projects, addTask, mainPage, projectName, projectDescription, tasks, taskForm, cancelTaskForm, addTaskToProject} from "../index";
import { modalAdd } from "./modal";
import { formatDistance, subDays } from "date-fns";

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
        let newDate= task.dueDate.split("-");
        let dateDistance= formatDistance(new Date(newDate[0], (newDate[1]-1), newDate[2]), new Date(), {addSuffix: true});
        toDoDate.innerText= dateDistance;
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
        addTask.setAttribute("style", "display:;");
        taskForm.setAttribute("style", "display:none;");
    });
};

const submitTask= (project) => {
    addTaskToProject.addEventListener("click", (e)=> {
        checkTaskLength(project);
        displayCurrentTasks(project);
        taskForm.reset();
        e.preventDefault();
        addTask.setAttribute("style", "display:;");
        taskForm.setAttribute("style", "display:none;");
    });
};

const checkTaskLength= (project) => {
    if (taskDescription.value.length > 0) {
        pushToProjects(project);
    };
};

const createTaskObject= (description, dueDate) => {
    return {description, dueDate};
};

const pushToProjects= (project) => {
    const projectToDo= createTaskObject(taskDescription.value, dueDate.value)
    project.tasks.push(projectToDo);
};