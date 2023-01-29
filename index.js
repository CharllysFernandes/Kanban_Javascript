const dashboard = document.getElementById('dashboard');
let database = new Array()

database = getDatabase();

if (database === null) {
  database = []

} else {
  render()

}

function render() {
  renderColumn(database)
  renderTask(database)

}

function addCustomCard() {
  let customCard = { label: 'Unspecified stage', task: [] }
  database.push(customCard)
  render()

}

function addTask(indexDatabase) {
  if (database < 1) {
    alert("Add one column first!")

  }
  let newEmptyTask = { label: "New empty task", description: 'One simple description ...' }
  database[indexDatabase].task.push(newEmptyTask)
  render();

}

function changeLabelTask(indexDatabase, indexTask) {
  const inputValue = document.getElementById(`inputLabel_${indexDatabase}${indexTask}`).value
  database[indexDatabase].task[indexTask].label = inputValue
  render()

}

function changeDescripTask(indexDatabase, indexTask) {
  const input = document.getElementById(`inputDescript_${indexDatabase}${indexTask}`).value;
  database[indexDatabase].task[indexTask].description = input
  render()

}

function deleteTask(indexDatabase, indexTask) {
  database[indexDatabase].task.splice(indexTask, 1);
  render()

}

function remove(index) {
  // Add confirmation...
  if (database[index].task.length > 0) {
    if (window.confirm('Delete all saved tasks?')) {
      database.splice(index, 1)
      render()

    }

  } else {
    database.splice(index, 1)
    render()

  }

}

function changeLabelCard(index) {
  let valueInput = document.getElementById(`label_${index}`).value;
  database[index].label = valueInput
  render(database)

}


function saveDatabase(database) {
  localStorage.setItem('database', JSON.stringify(database))

}

function getDatabase() {
  return JSON.parse(localStorage.getItem('database'))

}

function renderTask(database) {
  for (let i = 0; i < database.length; i++) {
    let indexDatabase = i
    var columnTask = document.getElementById(`columnTask_${indexDatabase}`)
    columnTask.innerHTML = "";

    let arrayTaskRender = database[i].task
    for (let i = 0; i < arrayTaskRender.length; i++) {
      let indexTask = i;
      let label = arrayTaskRender[i].label;
      let description = arrayTaskRender[i].description;

      columnTask.innerHTML +=
        `
        <div class="p-2 custom-card-task rounded rounded-3 shadow-sm my-2" id="cardTask">
        <input type="text" class="fs-6 fw-bold border-0 rounded-0" value="${label}" onchange="changeLabelTask(${indexDatabase},${indexTask})" id="inputLabel_${indexDatabase}${indexTask}">
        <button class="btn float-end" onclick="deleteTask(${indexDatabase},${indexTask})" ><i class="bi bi-x fs-6"></i></button>
        <div class="description">
          <i class="bi bi-file-earmark-text-fill small"></i>
          <span class="text-uppercase fw-bold small">description</span>
        </div>
        <p class="m-0 py-1">
          <input type="text" class="border-0 rounded-0 w-100 " value="${description}" onchange="changeDescripTask(${indexDatabase},${indexTask})" id="inputDescript_${indexDatabase}${indexTask}">
        </p>
        <div id="taskOption" class="taskOption">
          <button class="btn" id="btnMove">
          
  
          </button>
          

          <!-- Example split danger button -->
        <div class="btn-group">
          <button type="button" class="btn btn-success"><i class="bi bi-shuffle"></i></button>
          <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu" id='dropdown-menu${indexDatabase}'>
              <li>Teste</li>
          </ul>
        </div>
        </div>
      </div> 
    `
    }
    renderButtonAddTask(indexDatabase)

  }
}

function renderColumn(database) {
  saveDatabase(database)
  dashboard.innerHTML = '';
  for (let i = 0; i < database.length; i++) {
    let title = database[i].label
    let numberOfTask = database[i].task.length
    dashboard.innerHTML +=
      `
    <div class="rounded rounded-3 customCard p-3 me-4 h-100" id="customCard_${i}">
        <div class="d-flex flex-row justify-content-between align-items-center">
            <div class="title-column">
              <input type="text" class="border-0 bg-transparent" onchange="changeLabelCard(${i})" id='label_${i}' value="${title}">
              <span class="title-number rounded rounded-2 p-1">
              ${numberOfTask}
              </span>
            </div>
          <button class="btn btn-add-circle rounded-circle text-center m-0 p-0" onclick="remove(${i})"><i class="bi-x fs-5"></i></button>
        </div>
        <div id="columnTask_${i}"></div>      
      </div>
    `
  }
  renderButtonAddColumn();

}

function renderButtonAddTask(indexDatabase) {
  var columnTask = document.getElementById(`columnTask_${indexDatabase}`)

  columnTask.innerHTML +=
    `
  <button class="btn w-100 shadow-sm bg-body-tertiary my-3" onclick="addTask(${indexDatabase})">
          <i class="bi bi-plus"></i>
        </button>
  `

}


// Task to-do add collumn end 

function renderButtonAddColumn() {
  dashboard.innerHTML +=
    `
  <button class="btn btn-outline-success h-100" onclick="addCustomCard()">
      <i class="bi bi-plus"></i>
      Add card
    </button>
    `

}

