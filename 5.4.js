// 1
let myTable = [];

// 2
const rows = 5; 
const cols = 4; 

// 3
let counter = 0;

// 4
for (let i = 0; i < rows; i++) {
  // 5
  let tempTable = [];

  // 6
  for (let j = 0; j < cols; j++) {
    // 7
    counter++;

    // 8
    tempTable.push(counter);
  }

  // 9
  myTable.push(tempTable);
}

// 10
console.table(myTable);
