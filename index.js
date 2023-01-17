// Add Column
let dataDB = 
[
  {
    id:0,
    tag: 'New task',
    task:
      [
        'New task one','New task two', 'New task three'
      ]
  },
  {
    id:1,
    tag: 'Index One Task',
    task:
      [
        'New task one','New task two', 'New task three'
      ]
  }
]
// let dataDB = new Array()
let numberColumn = dataDB.column
let btnaddColumn = document.getElementById('addColumn');
let columnKanban = document.getElementById('columnKanban');

btnaddColumn.addEventListener('click', function () {
    // dataDB.column++
    // setLocalSave(dataDB)
    renderColumn()
    

})

function setLocalSave(arrayJSON) {
    // JSON.stringify(arrayJSON);
    localStorage.setItem('dataDB', JSON.stringify(arrayJSON));
}

function renderColumn() {
    console.log('Render Columns')
    console.log(dataDB)

    for (let i = 0; i < dataDB.length; i++) {
      let index = i
      columnKanban.innerHTML += 
      `
      <div class="card w-20em" id=${dataDB[i].id}>
        <div class="card-header bg-dark-subtle text-dark d-flex align-items-center justify-content-between">
          ${dataDB[i].tag} <button class="btn" onclick="removeCard(${index})" ><i class="bi bi-x-lg"></i></button>
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

  }

function getLocalSave() {
    return localStorage.getItem('dataDB')
}

function removeCard(index) {
  dataDB.splice(index, 1)
  columnKanban.innerHTML = '', // OR reload document DOM
  renderColumn()
}