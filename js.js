
function cardTask() {
    return 
    `
    <div class="p-2 custom-card-task rounded rounded-3 shadow-sm my-2">
            <h2 class="fs-6 fw-bold">Read the HIPA Center</h2>
            <div class="description">
              <i class="bi bi-file-earmark-text-fill small"></i>
              <span class="text-uppercase fw-bold small">description</span>
            </div>
            <p class="m-0 py-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque cum magni deleniti.
            </p>
          </div>
    `
  }
  
  
  let customCard = 
  `
  <div class="rounded rounded-3 customCard p-3 me-4">
    <div class="d-flex flex-row justify-content-between align-items-center">
        <div class="title-column">
          <span>Unspecified Stage</span>
          <span class="title-number rounded rounded-2 p-1">
          0
          </span>
        </div>
      <button class="btn btn-add-circle rounded-circle text-center m-0 p-0"><i class="bi-plus fs-5"></i></button>
    </div>      
  </div>
  `
  
  let buttonCard = 
  `
  <!-- Card Task -->
  <button class="btn btn2 w-100 mt-3">
    <i class="bi-plus"></i>
    Add Task
  </button>
  <!-- Card Task End -->
  `