// 1
let array = [];

// 2
for (let i = 1; i <= 10; i++) {
  array.push(i);
}

// 3
console.log(array);

// 4
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 5
for (let value of array) {
  console.log(value);
}
