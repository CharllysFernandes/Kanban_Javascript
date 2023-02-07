const getInputLabelTask = (indexDatabase, indexTask) => document.getElementById(`inputLabel_${indexDatabase}${indexTask}`).value
const inputDescript = (indexDatabase, indexTask) => document.getElementById(`inputDescript_${indexDatabase}${indexTask}`).value;
const getInputLabelCard = (index) => document.getElementById(`label_${index}`).value;
const columnTask = (indexDatabase) => document.getElementById(`columnTask_${indexDatabase}`)
const iconBackupFile = (className) => document.getElementById('btnBackup').classList.add(`${className}`)
const btnBackupFile = document.getElementById('createBackupFile')
const btnUploadFile = document.getElementById('btnUploadFile')
const file = document.getElementById('file')
const btnUpload = document.getElementById('btnUpload')



const customCard = { label: 'Unspecified stage ', task: [] }
const newEmptyTask = { label: "New empty task", description: 'One simple description ...' }

const dashboard = document.getElementById('dashboard');
let database = new Array()

database = getDatabase();

if (database === null || database.length < 1) {
  var statusDatabase = false;
  database = []
  renderButtonAddColumn()
  buttonBackupFile()

} else {
  var statusDatabase = true
  render()

}

// Upload File

btnUpload.addEventListener('click', handleSubmit)


function handleSubmit(event) {
  console.log('entrando no handle')
  event.preventDefault(); // Stop the form reloading the page
  if (!file.value.length) return; // no file nothing to do

  let reader = new FileReader(); 

  reader.onload = logFile;

  reader.readAsText(file.files[0])

}

function logFile(event) {
  database = JSON.parse(event.target.result)
  render()
}

// End Upload File


function buttonBackupFile() {
  if (statusDatabase) {
    iconBackupFile('bi-cloud-arrow-down');
    btnBackupFile.addEventListener('click', () => {
      let link = document.createElement('a');
      link.href = 'data:application/octet-stream;charset=utf-8,' + JSON.stringify(database, null, 2);
      link.download = 'KabanFileBackup.json';
      link.click();
    })


  } else {
    iconBackupFile('bi-cloud-arrow-up');
    btnBackupFile.setAttribute('data-bs-toggle', 'modal')
    btnBackupFile.setAttribute('data-bs-target', '#exampleModal')
    btnBackupFile.addEventListener('click', () => {
      document.getElementById('modal').classList.add('d-block')
    })


  }
}

function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight) + "px";
}


function render() {
  renderColumn(database)
  renderTask(database)
  buttonBackupFile()

}

function addCustomCard() {
  if (statusDatabase) {
    database.push(customCard)
    let lastIndex = database.length - 1
    database[lastIndex].label += lastIndex
    render() 
  } else {
    database.push(customCard)
    render()
    
  }
  window.location.reload()
}

function addTask(indexDatabase) {
  if (database < 1) {
    alert("Add one column first!")

  }
  database[indexDatabase].task.push(newEmptyTask)
  render();

}

function changeLabelTask(indexDatabase, indexTask) {
  database[indexDatabase].task[indexTask].label = getInputLabelTask(indexDatabase, indexTask)
  render()

}

function changeDescripTask(indexDatabase, indexTask) {
  database[indexDatabase].task[indexTask].description = inputDescript(indexDatabase, indexTask)
  render()

}

function deleteTask(indexDatabase, indexTask) {
  database[indexDatabase].task.splice(indexTask, 1);
  render()

}

function remove(index) {
  if (database[index].task.length > 0) {
    if (window.confirm('Delete all saved tasks?')) {
      database.splice(index, 1)
    }

  } else {
    database.splice(index, 1)

  }
  render()
  window.location.reload()
}

function changeLabelCard(index) {
  database[index].label = getInputLabelCard(index)
  render(database)

}

function moveTask(indexDatabase, indexTask) {
  var inputSelect = document.getElementById(`select-options${indexDatabase}${indexTask}`)
  var valueSelected = inputSelect.options[inputSelect.selectedIndex].value
  let indexFromValue = database.findIndex(i => i.label === valueSelected)
  let getTaskToMove = database[indexDatabase].task[indexTask];

  database[indexFromValue].task.push(getTaskToMove)
  deleteTask(indexDatabase, indexTask);

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

      columnTask.innerHTML += renderCardTask(label, indexDatabase, indexTask, description)
    }
    renderButtonAddTask(indexDatabase)
  }
  createBtnMove();
}


function renderColumn(database) {
  saveDatabase(database)
  dashboard.innerHTML = '';
  for (let i = 0; i < database.length; i++) {
    let title = database[i].label
    let numberOfTask = database[i].task.length
    dashboard.innerHTML += renderCardColumn(i, numberOfTask, title)
  }
  renderButtonAddColumn();

}

function renderButtonAddTask(indexDatabase) {
  columnTask(indexDatabase).innerHTML += buttonTask(indexDatabase)

}

function renderButtonAddColumn() {
  dashboard.innerHTML += buttonCard()

}


function createBtnMove() {
  let arrayList = []
  for (let indexDatabase = 0; indexDatabase < database.length; indexDatabase++) {
    arrayList.push(database[indexDatabase].label)
  }
  for (let indexDatabase = 0; indexDatabase < database.length; indexDatabase++) {
    for (let indexTask = 0; indexTask < database[indexDatabase].task.length; indexTask++) {
      optionMove = "select-options" + indexDatabase + indexTask
      var selectOptionLabel = document.getElementById(optionMove)

      for (let i = 0; i < arrayList.length; i++) {
        selectOptionLabel.innerHTML += optionList(arrayList[i])
      }
    }
  }

}


function saveDatabase(database) {
  localStorage.setItem('database', JSON.stringify(database))

}

function getDatabase() {
  return JSON.parse(localStorage.getItem('database'))

}

function createBackupFile() {
  let link = document.createElement('a');
  link.href = 'data:application/octet-stream;charset=utf-8,' + JSON.stringify(localStorage.getItem('database'));
  link.download = 'KabanFileBackup';
  link.click();
}
