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
  database.unshift(customCard)
  render()

}

function addTask() {
  if (database < 1) {
    alert("Add one column first!")
  }
  let newEmptyTask = { label: "New empty task", description: 'One simple description ...' }
  database[0].task.push(newEmptyTask)
  saveDatabase(database)
  // renderTask(database)
  window.location.reload()
}

function changeLabelTask(index) {
  const inputValue = document.getElementById(`inputLabel_${index}`).value
  database[0].task[index].label = inputValue
  render()
}

function changeDescripTask(index) {
  const input = document.getElementById(`inputDescript_${index}`).value;
  database[0].task[index].description = input
  render()
}

function remove(index) {
  database.splice(index, 1)
  render()
}

function change(index) {
  if (index === 0) {
    alert('Card cannot be edited.')
    render(database)
  } else {
    let valueInput = document.getElementById(`label_${index}`).value;
    database[index].label = valueInput
    render(database)

  }
}

function renderTask(database) {
  let columnTask = document.getElementById('columnTask_0');

  if (database.length !== 0) {
    var arrayTask = database[0].task
    if (arrayTask.length > 0) {
    }
    
  }
  
  // Javascript Hoisting
  
  
  
  columnTask.innerHTML = '';
  for (let i = 0; i < arrayTask.length; i++) {
    var label = arrayTask[i].label
    var description = arrayTask[i].description
    columnTask.innerHTML +=
      `
    <div class="p-2 custom-card-task rounded rounded-3 shadow-sm my-2">
    <input type="text" class="fs-6 fw-bold border-0 rounded-0 w-100" value="${label}" onchange="changeLabelTask(${i})" id="inputLabel_${i}">
    <div class="description">
      <i class="bi bi-file-earmark-text-fill small"></i>
      <span class="text-uppercase fw-bold small">description</span>
    </div>
    <p class="m-0 py-1">
      <input type="text" class="border-0 rounded-0 w-100 " value="${description}" onchange="changeDescripTask(${i})" id="inputDescript_${i}">
    </p>
  </div>
    
    `
  }
}

function renderColumn(database) {
  saveDatabase(database)
  // if (database.length >= 1) {
  //   var numberOfTask = database[0].task.length;

  // }
  dashboard.innerHTML = '';
  for (let i = 0; i < database.length; i++) {
    let title = database[i].label
    let numberOfTask = database[i].task.length
    dashboard.innerHTML +=
      `
    <div class="rounded rounded-3 customCard p-3 me-4 h-100" id="customCard_${i}">
        <div class="d-flex flex-row justify-content-between align-items-center">
            <div class="title-column">
              <input type="text" class="border-0 bg-transparent" onchange="change(${i})" id='label_${i}' value="${title}">
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


}

function saveDatabase(database) {
  localStorage.setItem('database', JSON.stringify(database))
}

function getDatabase() {
  return JSON.parse(localStorage.getItem('database'))
}
