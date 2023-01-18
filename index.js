let btnAddColumn = document.getElementById('addColumn');
let columnKanban = document.getElementById('columnKanban');
let cardTask = document.getElementById('cardTask')
let arr = []

if (getLocalStorage() !== []) {
  arr = getLocalStorage();
  renderColumn(arr);
}

btnAddColumn.addEventListener('click', function () {
  console.log('Create column');
  addArray()
  renderColumn(arr)
})

function addArray() {
  let newArr = {tagLabel: "New column", task:[]}
  JSON.stringify(newArr)
  arr.push(newArr);
  saveLocalStorage(arr)
  
}

function change(index) {
  let newLabel = document.getElementById(`label_${index}`).value;
  columnKanban.innerHTML = '';
  arr[index].tagLabel = newLabel
  saveLocalStorage(arr)
  renderColumn(arr)
}

function removeCard(index) {
  columnKanban.innerHTML = '';
  arr.splice(index, 1)
  saveLocalStorage(arr)
  renderColumn(arr)
}

function renderColumn(data) {
  columnKanban.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    let index = i
    let tagLabel = data[i].tagLabel;
    columnKanban.innerHTML += 
    `
    <div class="card w-20em" id=${index}>
        <div class="card-header bg-dark-subtle text-dark d-flex align-items-center justify-content-between">
        <input class="border border-0 bg-transparent btn text-start" type="text" value="${tagLabel}" onchange="change(${index})" id="label_${index}">
        <button class="btn" onclick="removeCard(${index})" ><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="card-body" id="bodyNewTask">
          <!-- cards task -->
          </div>
        </div>
      </div>
    `
    
  }
}

function saveLocalStorage(array) {
  localStorage.setItem('dataDB', JSON.stringify(array))
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('dataDB')) 
}