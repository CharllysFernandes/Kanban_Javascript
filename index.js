let database = new Array()
let dashboard = document.getElementById('dashboard');

database = getDatabase();

if (database === null) {
  database = []
} else {
  render(database)
  renderTask(database)
}

function addCustomCard() {
  let customCard = { label: 'Unspecified stage', task: [] }
  database.push(customCard)
  render(database)
  renderTask(database)

}

function addTask() {

  if (database === []) {
    console.error('database === []');
  }

  database[0].task.push('New task empty')
  saveDatabase(database)
  renderTask(database)
}

function remove(index) {
  database.splice(index, 1)
  render(database)
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
  console.log('Render task');
  let columnTask = document.getElementById('columnTask_0')
  let arrayTask = database[0].task
  console.log(arrayTask);

  columnTask.innerHTML = '';
  for (let i = 0; i < arrayTask.length; i++) {
    columnTask.innerHTML +=
      `
    <div class="p-2 custom-card-task rounded rounded-3 shadow-sm my-2">
      <h2 class="fs-6 fw-bold">
        ${arrayTask[i]}
      </h2>
      <div class="description">
        <i class="bi bi-file-earmark-text-fill small"></i>
        <span class="text-uppercase fw-bold small">description</span>
      </div>
      <p class="m-0 py-1">
        <input type="text" class="border-0 rounded-0 " value="Add description ...">
      </p>
    </div>
    `
  }
}

function render(database) {
  saveDatabase(database)
  dashboard.innerHTML = '';
  for (let i = 0; i < database.length; i++) {
    let title = database[i].label
    dashboard.innerHTML +=
      `
    <div class="rounded rounded-3 customCard p-3 me-4" id="customCard_${i}">
        <div class="d-flex flex-row justify-content-between align-items-center">
            <div class="title-column">
              <input type="text" class="border-0 bg-transparent" onchange="change(${i})" id='label_${i}' value="${title}">
              <span class="title-number rounded rounded-2 p-1">
              0
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
