document.getElementById("imageButton").addEventListener('click', function () {

    document.body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

});


const today = new Date().toDateString();

document.getElementById("today-date").innerHTML = today;


const tasklist = document.getElementsByClassName("task");

document.getElementById("total-task").innerHTML = tasklist.length;

const completedTasks = document.getElementsByClassName("completed");
document.getElementById("task-completed").innerHTML = 23 + completedTasks.length;



document.getElementById("btn-completed-1").addEventListener("click", function () {

    let taskElement = this.closest(".task");
    let taskTitle = taskElement.querySelector("h1.font-bold").innerText;
    let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (!taskElement.classList.contains("completed")) {

        taskElement.classList.add("completed");


        this.classList.add("opacity-20");
        this.classList.remove("hover:opacity-60");
        this.disabled = true;


        const tasklist = document.getElementsByClassName("task");
        const completedTasks = document.getElementsByClassName("completed");


        document.getElementById("total-task").innerHTML = tasklist.length - completedTasks.length;
        document.getElementById("task-completed").innerHTML = 23 + completedTasks.length;

        const finishedTaskContainer = document.getElementById("finished-tasks");
        const completedTaskMessage = document.createElement('span');
        completedTaskMessage.innerHTML =
            `<p class="bg-gray-100 p-2 rounded-lg">
                You have completed the task "${taskTitle}" at ${currentTime}
            </p>`;
        finishedTaskContainer.appendChild(completedTaskMessage);

        alert("Task completed!");
        console.log("Task completed!", finishedTaskContainer);
    } else {
        alert("This task is already completed.");
    }
});
document.getElementById("btn-completed-2").addEventListener("click", function () {

    let taskElement = this.closest(".task");
    let taskTitle = taskElement.querySelector("h1.font-bold").innerText;
    let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (!taskElement.classList.contains("completed")) {

        taskElement.classList.add("completed");


        this.classList.add("opacity-20");
        this.classList.remove("hover:opacity-60");
        this.disabled = true;


        const tasklist = document.getElementsByClassName("task");
        const completedTasks = document.getElementsByClassName("completed");


        document.getElementById("total-task").innerHTML = tasklist.length - completedTasks.length;
        document.getElementById("task-completed").innerHTML = 23 + completedTasks.length;

        const finishedTaskContainer = document.getElementById("finished-tasks");
        const completedTaskMessage = document.createElement('span');
        completedTaskMessage.innerHTML =
            `<p class="bg-gray-100 p-2 rounded-lg">
                You have completed the task "${taskTitle}" at ${currentTime}
            </p>`;
        finishedTaskContainer.appendChild(completedTaskMessage);

        alert("Task completed!");
        console.log("Task completed!", finishedTaskContainer);
    } else {
        alert("This task is already completed.");
    }
});
document.getElementById("btn-completed-3").addEventListener("click", function () {

    let taskElement = this.closest(".task");
    let taskTitle = taskElement.querySelector("h1.font-bold").innerText;
    let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (!taskElement.classList.contains("completed")) {

        taskElement.classList.add("completed");


        this.classList.add("opacity-20");
        this.classList.remove("hover:opacity-60");
        this.disabled = true;


        const tasklist = document.getElementsByClassName("task");
        const completedTasks = document.getElementsByClassName("completed");


        document.getElementById("total-task").innerHTML = tasklist.length - completedTasks.length;
        document.getElementById("task-completed").innerHTML = 23 + completedTasks.length;

        const finishedTaskContainer = document.getElementById("finished-tasks");
        const completedTaskMessage = document.createElement('span');
        completedTaskMessage.innerHTML =
            `<p class="bg-gray-100 p-2 rounded-lg">
                You have completed the task "${taskTitle}" at ${currentTime}
            </p>`;
        finishedTaskContainer.appendChild(completedTaskMessage);

        alert("Task completed!");
        console.log("Task completed!", finishedTaskContainer);
    } else {
        alert("This task is already completed.");
    }
});
document.getElementById("btn-completed-4").addEventListener("click", function () {

    let taskElement = this.closest(".task");
    let taskTitle = taskElement.querySelector("h1.font-bold").innerText;
    let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (!taskElement.classList.contains("completed")) {

        taskElement.classList.add("completed");


        this.classList.add("opacity-20");
        this.classList.remove("hover:opacity-60");
        this.disabled = true;


        const tasklist = document.getElementsByClassName("task");
        const completedTasks = document.getElementsByClassName("completed");


        document.getElementById("total-task").innerHTML = tasklist.length - completedTasks.length;
        document.getElementById("task-completed").innerHTML = 23 + completedTasks.length;

        const finishedTaskContainer = document.getElementById("finished-tasks");
        const completedTaskMessage = document.createElement('span');
        completedTaskMessage.innerHTML =
            `<p class="bg-gray-100 p-2 rounded-lg">
                You have completed the task "${taskTitle}" at ${currentTime}
            </p>`;
        finishedTaskContainer.appendChild(completedTaskMessage);

        alert("Task completed!");
        console.log("Task completed!", finishedTaskContainer);
    } else {
        alert("This task is already completed.");
    }
});
document.getElementById("btn-completed-5").addEventListener("click", function () {

    let taskElement = this.closest(".task");
    let taskTitle = taskElement.querySelector("h1.font-bold").innerText;
    let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (!taskElement.classList.contains("completed")) {

        taskElement.classList.add("completed");


        this.classList.add("opacity-20");
        this.classList.remove("hover:opacity-60");
        this.disabled = true;


        const tasklist = document.getElementsByClassName("task");
        const completedTasks = document.getElementsByClassName("completed");

        document.getElementById("total-task").innerHTML = tasklist.length - completedTasks.length;
        document.getElementById("task-completed").innerHTML = 23 + completedTasks.length;

        const finishedTaskContainer = document.getElementById("finished-tasks");
        const completedTaskMessage = document.createElement('span');
        completedTaskMessage.innerHTML =
            `<p class="bg-gray-100 p-2 rounded-lg">
                You have completed the task "${taskTitle}" at ${currentTime}
            </p>`;
        finishedTaskContainer.appendChild(completedTaskMessage);

        alert("Task completed!");
        console.log("Task completed!", finishedTaskContainer);
    } else {
        alert("This task is already completed.");
    }
});
document.getElementById("btn-completed-6").addEventListener("click", function () {

    let taskElement = this.closest(".task");
    let taskTitle = taskElement.querySelector("h1.font-bold").innerText;
    let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (!taskElement.classList.contains("completed")) {

        taskElement.classList.add("completed");


        this.classList.add("opacity-20");
        this.classList.remove("hover:opacity-60");
        this.disabled = true;


        const tasklist = document.getElementsByClassName("task");
        const completedTasks = document.getElementsByClassName("completed");


        document.getElementById("total-task").innerHTML = tasklist.length - completedTasks.length;
        document.getElementById("task-completed").innerHTML = 23 + completedTasks.length;

        const finishedTaskContainer = document.getElementById("finished-tasks");
        const completedTaskMessage = document.createElement('span');
        completedTaskMessage.innerHTML =
            `<p class="bg-gray-100 p-2 rounded-lg">
                You have completed the task "${taskTitle}" at ${currentTime}
            </p>`;
        finishedTaskContainer.appendChild(completedTaskMessage);

        alert("Task completed!");
        console.log("Task completed!", finishedTaskContainer);
    } else {
        alert("This task is already completed.");
    }
});


document.getElementById("btn-clear").addEventListener("click", function () {

    document.getElementById("finished-tasks").innerHTML = "";

    alert("All tasks are cleared.");
});




