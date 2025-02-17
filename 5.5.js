// 1
let grid = [];

// 2
const totalCells = 64;

// 3
let counter = 0;

// 4
let row;

// 5
for (let i = 0; i <= totalCells; i++) {
  
  // 6
  if (counter % 8 === 0) {
    
    // 7
    if (row) {
      grid.push(row);
    }

    // 8
    row = [];
  }

  // 9
  counter++;

  // 10
  let cellValue = counter;
  row.push(cellValue);

  // 11
  if (counter % 8 === 0) {
    grid.push(row);
  }
}

// 13
console.table(grid);
