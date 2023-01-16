// Add Column
let dataDB = {'column':0,'columns':{}}

// let dataDB = new Array()
let numberColumn = dataDB.column
let btnaddColumn = document.getElementById('addColumn');
let columnKanban = document.getElementById('columnKanban');

btnaddColumn.addEventListener('click', function () {
    dataDB.column++
    setLocalSave(dataDB)
    renderColumn()
})

function setLocalSave(arrayJSON) {
    // JSON.stringify(arrayJSON);
    localStorage.setItem('dataDB', JSON.stringify(arrayJSON));
}

function renderColumn() {
    console.log('Render Columns')
    let arr = JSON.parse(getLocalSave())
    
        columnKanban.innerHTML += 
       `
       <div class="card w-20em">
        <div class="card-header bg-dark-subtle text-dark">
          New column
        </div>
        <div class="card-body" id="bodyNewTask">
          <!-- cards task -->
          <div class="card bg-dark-subtle p-1 border-start text-dark my-2" id="newCard">
            <!-- <div class="bg-danger"></div> -->
            Exemple task
            <div class="d-none" id="colorId">mostrando</div>
          </div>
        </div>
      </div>

       `
}

function getLocalSave() {
    return localStorage.getItem('dataDB')
}