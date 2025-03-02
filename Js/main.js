document.getElementById("imageButton").addEventListener('click', function () {
    // alert("Button clicked!");
    document.body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    // console.log("Button clicked!");
});


const today = new Date().toDateString();

document.getElementById("today-date").innerHTML = today;


const tasklist = document.getElementsByClassName("task");

document.getElementById("total-task").innerHTML = tasklist.length;

const completedTasks = document.getElementsByClassName("completed");
document.getElementById("task-completed").innerHTML = 23 + completedTasks.length;



document.getElementById("btn-completed-1").addEventListener("click", function () {
    // Mark the first incomplete task as completed
    for (let task of tasklist) {
        if (!task.classList.contains("completed")) {
            task.classList.add("completed");
            break;
        }
    }
    alert("Task completed!");
    // Update the completed task count
    document.getElementById("total-task").innerHTML = tasklist.length;
    document.getElementById("task-completed").innerHTML = 23 + completedTasks.length;
});