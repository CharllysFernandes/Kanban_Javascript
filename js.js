let database = new Array();

database = []

console.log(database);


if (database.length > 0) {
  console.log('database > 0')
} else {
  console.log('database < 1');
}



function getDatabase() {
  return JSON.parse(localStorage.getItem('database'))
}
