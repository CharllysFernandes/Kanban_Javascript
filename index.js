let btnAddColumn = document.getElementById('addColumn');
let columnKanban = document.getElementById('columnKanban');
let cardTask = document.getElementById('cardTask')
let arr = []

if (getLocalStorage() !== []) {
  arr = getLocalStorage();
  renderColumn(arr);
}

btnAddColumn.addEventListener('click', function () {
  addArray()
  renderColumn(arr)
})

function addArray() {
  let newArr = { tagLabel: "New column", task: [] }
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

function changeTask(task) {
  
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
    <div class="card w-20em" id="card">
        <div class="card-header bg-dark-subtle text-dark d-flex align-items-center justify-content-between">
        <input class="border border-0 bg-transparent btn text-start" type="text" value="${tagLabel}" onchange="change(${index})" id="label_${index}">
        <button class="btn" onclick="removeCard(${index})" ><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="card-body" id="target">
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

const source = document.getElementById('source');
source.addEventListener('dragstart', (e) => {
  e.dataTransfer.clearData();
  e.dataTransfer.setData('text/plain', e.target.id)

  const target = document.querySelector('#target');
  target.addEventListener('dragover', (e) => {
    e.preventDefault();
  })

  target.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    const source = document.getElementById(data);
    e.target.appendChild(source)
    console.log(source.innerHTML)
    console.log(arr);
    arr[0].task.push(source.innerText)
  })
})