let btnAddTask = document.getElementById('addTask');
let inputAddTask = document.getElementById('inputAddTask');
let bodyNewTask = document.getElementById('bodyNewTask');
let clickCard = document.getElementById('card');
let dadosJSON = new Array()

btnAddTask.addEventListener('click', function () {
    inputAddTask.value == "" ? alert('Add new task') : addNewTask();

});

clickCard.addEventListener('click', function () {
    console.log('Cores')
    document.getElementById('colorId').classList.remove('d-none');

})

function addNewTask() {
    let taskInput = inputAddTask.value;

    bodyNewTask.innerHTML +=
        `
    <div class="card bg-dark-subtle p-1 border-start text-dark my-2" >
        <span>${taskInput}</span>
    </div>
    `
    inputAddTask.value = ""
    dadosJSON.push({ task: `${taskInput}`, column: "new task" })
    console.log(dadosJSON)
    saveData(dadosJSON)
}

function saveData(data) {
    let dataDB = JSON.stringify(data)
    localStorage.setItem("dataDB", dataDB)
}

