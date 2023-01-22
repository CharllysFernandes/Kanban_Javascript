let database = new Array()
let dashboard = document.getElementById('dashboard');

database = getDatabase();

if (database === null  ) {
  database = []
}else{
  render(database)
}

function addCustomCard() {
  let customCard = {label:'Unspecified stage', task:[]}
  database.push(customCard)
  render(database)
}

function addTask() {
  database[0].task.push('New task empty')
  saveDatabase(database)
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
