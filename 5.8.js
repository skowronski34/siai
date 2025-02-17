// 1
let output = "";

// 2
const skipNumber = 5;

// 3
for (let i = 1; i <= 10; i++) {
  
  // 4
  if (i === skipNumber) {
    // 5
    continue;
  }

  // 6
  output += i + " ";
}

// 7
console.log("Z continue:", output);

// 8
output = "";

for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    break;
  }
  output += i + " ";
}

console.log("Z break:", output);
