for (let indexDatabase = 0; indexDatabase < database.length; indexDatabase++) {
    console.log(indexDatabase)
    for (let indexTask = 0; indexTask < database[indexDatabase].task.length; indexTask++) {
       idDropMenu = "dropdown-menu"+indexDatabase+indexTask
        dropdownMenu = document.getElementById(idDropMenu)
        dropdownMenu.innerHTML += 'TESTE'        
    }
    
}
