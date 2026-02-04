function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();


    if (taskText === "") {
        alert("Please enter a task");
        return;
    }


    const dateTime = new Date().toLocaleString();
    const li = document.createElement("li");


    li.innerHTML = `
<div>
<strong>${taskText}</strong>
<div class="task-info">Added: ${dateTime}</div>
</div>
<div class="actions">
<button onclick="completeTask(this)">✔</button>
<button onclick="editTask(this)">✏</button>
<button onclick="deleteTask(this)">🗑</button>
</div>
`;


    document.getElementById("pendingTasks").appendChild(li);
    taskInput.value = "";
}


function completeTask(button) {
    const li = button.parentElement.parentElement;
    const completedTime = new Date().toLocaleString();
    li.querySelector('.task-info').innerText += ` | Completed: ${completedTime}`;
    button.remove();
    document.getElementById("completedTasks").appendChild(li);
}


function editTask(button) {
    const li = button.parentElement.parentElement;
    const taskText = li.querySelector("strong");
    const newTask = prompt("Edit task:", taskText.innerText);
    if (newTask !== null) {
        taskText.innerText = newTask;
    }
}


function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}