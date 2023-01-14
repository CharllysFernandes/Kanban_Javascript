/**
 * 
 *      new Array
 *      JSON.parse convert into text
 *      getItem from localStorage
 * 
 */

// let dadosJSON = new Array(JSON.parse(localStorage.getItem("dataBD")))

let dadosJSON = new Array({
    "column": {
        "New Task": [
            {
                "id": 1,
                "tag": "Create new one task"
            },
            {
                "id": 2,
                "tag": "Create two task"
            },
            {
                "id": 3,
                "tag": "Create three task"
            }
        ],
        "Task Done": [
            {
                "id": 1,
                "tag": "Create one task Done"
            },
            {
                "id": 2,
                "tag": "Create two task done"
            },
            {
                "id": 3,
                "tag": "Create three task done"
            }
        ]
    }
})
console.log(dadosJSON)
if (dadosJSON.length > 1) {
    render(dadosJSON);
}

let btnAddTask = document.getElementById('addTask');
let inputAddTask = document.getElementById('inputAddTask');
let columnNewTask = document.getElementById('columnNewTask');

btnAddTask.addEventListener('click', function () {
    inputAddTask.value == "" ? alert('Add new task') : render();
});

function render(params) {
    console.log('function render()')

    if (params > 1) {
        console.log('render com dados')
    } else {
        let newTask = inputAddTask.value;
        dadosJSON.push()
        columnNewTask.innerHTML =
            `
    <div class="card w-20em">
        <div class="card-header bg-dark-subtle text-dark">
            New task
        </div>
        <div class="card-body" id="bodyNewTask">
            <div class="card bg-dark-subtle p-1 border-start text-dark my-2" id="card">${newTask}</div>
        </div>
    </div>
    `

    }


}



// let bodyNewTask = document.getElementById('bodyNewTask');
// let clickCard = document.getElementById('card');


// clickCard.addEventListener('click', function () {
//     console.log('Cores')
//     document.getElementById('colorId').classList.remove('d-none');

// })


// function addNewTask() {
//     let taskInput = inputAddTask.value;

//     bodyNewTask.innerHTML +=
//         `
//     <div class="card bg-dark-subtle p-1 border-start text-dark my-2" >
//         <span>${taskInput}</span>
//     </div>
//     `
//     inputAddTask.value = ""
//     dadosJSON.push({ task: `${taskInput}`, column: "new task" })
//     console.log(dadosJSON)
//     saveData(dadosJSON)
// }

// function saveData(data) {
//     let dataDB = JSON.stringify(data)
//     localStorage.setItem("dataDB", dataDB)
// }

