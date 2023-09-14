import { projects, addTask, mainPage, projectName, projectDescription, tasks, taskForm, taskDescription, dueDate, cancelTaskForm, addTaskToProject, createTaskObject, editProject, editPen, cancelEdit, submitEdit, newName, newDescription} from "../index";
import { modalAdd } from "./modal";
import { formatDistance } from "date-fns";
import { displayProjects } from "./sideBar";

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
    SubmitEditFormButton(project);
};

const displayTitle = (project) => {
    const currentTitle= document.createElement("h2");
    currentTitle.innerText= project.title;
    modalAdd.addEventListener("click", () => {
        currentTitle.remove();
    });
    submitEdit.addEventListener("click", () => {
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
    submitEdit.addEventListener("click", () => {
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

        const taskInfo= document.createElement("div");
        taskInfo.classList.add("taskInfo");
        currentTasks.appendChild(taskInfo);

        const toDo= document.createElement("div");
        toDo.innerText= task.description;
        taskInfo.appendChild(toDo);

        const toDoDate= document.createElement("div");
        const newDate= task.dueDate.split("-");
        toDoDate.innerText= formatDistance(new Date(newDate[0], (newDate[1]-1), newDate[2]), new Date());
        taskInfo.appendChild(toDoDate);

        const taskControls= document.createElement("div");
        taskControls.classList.add("taskControls");
        currentTasks.appendChild(taskControls);

        const editTaskButton= document.createElement("button");
        editTaskButton.classList.add("editTask");
        editTaskButton.innerText= "Edit";
        taskControls.appendChild(editTaskButton);;

        editTaskButton.addEventListener("click", () => {
            currentTasks.setAttribute("style", "display:none;");
            addTask.setAttribute("style", "display:none;");
            taskForm.setAttribute("style", "display:flex;");
            addTaskToProject.removeEventListener("click", submitTask);
            addTaskToProject.addEventListener("click", () => {
                //
                task.description= taskDescription.value;
                task.dueDate= dueDate.value;
                //
            });
        });

        const deleteTaskButton= document.createElement("button");
        deleteTaskButton.classList.add("deleteTask");
        deleteTaskButton.innerText= "Delete";
        taskControls.appendChild(deleteTaskButton);

        deleteTaskButton.addEventListener("click", () => {
            currentTasks.remove();
            const i= Object.values(project.tasks).indexOf(task);
            project.tasks.splice(i,1);
            console.log(project);
        });
    });
    console.log(project);
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
    const projectToDo= createTaskObject(taskDescription.value, dueDate.value);
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

const SubmitEditFormButton= (project) => {
    submitEdit.addEventListener("click", (e) => {
        modifyProject(project);
        editProject.reset();
        e.preventDefault();
        closeEdits();
    });
};

const modifyProject= (project) => {
    if (newName.value.length > 0 && newDescription.value.length > 0) {
        project.title= newName.value;
        project.description= newDescription.value;
        displayTitle(project);
        displayDescription(project);
        displayProjects(project);
    } else if (newName.value.length > 0 && newDescription.value.length === 0) {
        project.title= newName.value;
        displayTitle(project);
        displayDescription(project);
        displayProjects(project);
    } else if (newName.value.length === 0 && newDescription.value.length > 0) {
        project.description= newDescription.value;
        displayTitle(project);
        displayDescription(project);
    } else {
        displayTitle(project);
        displayDescription(project);
    };
};

const closeEdits= () => {
    projectName.setAttribute("style", "display:;");
    projectDescription.setAttribute("style", "display:;");
    editPen.setAttribute("style", "display:flex;");
    editProject.setAttribute("style", "display:none;");
};