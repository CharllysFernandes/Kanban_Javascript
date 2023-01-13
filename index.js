let btnAddTask = document.getElementById('addTask');
let inputAddTask = document.getElementById('inputAddTask');
let bodyNewTask = document. getElementById('bodyNewTask');
let dadosJSON = [];

btnAddTask.addEventListener('click', function () {
   inputAddTask.value == "" ? alert('Add new task') : addNewTask()

});

function addNewTask() {
    bodyNewTask.innerHTML += 
    `
    <div class="card bg-dark-subtle p-1 border-start text-dark my-2">
        <span>${inputAddTask.value}</span>
    </div>
    `
    inputAddTask.value = ""
}