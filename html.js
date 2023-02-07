const optionList = (indexArrayList) => `<option value="${indexArrayList}">${indexArrayList}</option>`
const renderCardTask = (label, indexDatabase, indexTask, description) =>
    `
<div class="p-2 custom-card-task rounded rounded-3 shadow-sm my-2" id="cardTask" draggable="true">
      <input type="text" class="fs-6 fw-bold border-0 rounded-0" value="${label}" onchange="changeLabelTask(${indexDatabase},${indexTask})" id="inputLabel_${indexDatabase}${indexTask}">
      <button class="btn float-end" onclick="deleteTask(${indexDatabase},${indexTask})" ><i class="bi bi-x fs-6"></i></button>
      <div class="description">
      <i class="bi bi-file-earmark-text-fill small"></i>
      <span class="text-uppercase fw-bold small">description</span>
      </div>
      <p class="m-0 py-1">
        <textarea class="border-0 rounded-0 w-100" oninput="auto_grow(this)" id="inputDescript_${indexDatabase}${indexTask}" placeholder="Add description ..." onchange="changeDescripTask(${indexDatabase},${indexTask})">${description}</textarea>

      </p>
      <div id="taskOption" class="taskOption m-0 py-1 w-100">
      <select class="btn btn-success" name="optionMove" id="select-options${indexDatabase}${indexTask}"></select>
      <button class="btn btn-outline-success" onclick="moveTask(${indexDatabase},${indexTask})"><i class="bi bi-shuffle"></i></button>
      </div>
      
      </div>  
`

const renderCardColumn = (index, numberOfTask, title) =>
    `
<div class="rounded rounded-3 customCard p-3 me-4 h-100" id="customCard_${index}">
    <div class="d-flex flex-row justify-content-between align-items-center">
    <div class="title-column">
    <input type="text" class="border-0 bg-transparent" onchange="changeLabelCard(${index})" id='label_${index}' value="${title}">
    <span class="title-number rounded rounded-2 p-1">
    ${numberOfTask}
    </span>
    </div>
    <button class="btn btn-add-circle rounded-circle text-center m-0 p-0" onclick="remove(${index})"><i class="bi-x fs-5"></i></button>
    </div>
    <div id="columnTask_${index}"></div>      
    </div>
`

const buttonTask = (indexDatabase) =>
    `
<button class="btn w-100 shadow-sm bg-body-tertiary my-3" onclick="addTask(${indexDatabase})">
 <i class="bi bi-plus"></i>
</button>
`

const buttonCard = () =>
    `
<button class="btn btn-outline-success h-100" onclick="addCustomCard()">
  <i class="bi bi-plus"></i>
  Add card
  </button>
`