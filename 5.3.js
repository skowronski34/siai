// 1
let myWork = [];

// 2
for (let i = 1; i <= 10; i++) {
  // 3
  let status = (i % 2 === 0) ? true : false; 

  // 4
  let lesson = {
    name: `Lekcja ${i}`, 
    status: status 
  };

  // 5
  myWork.push(lesson);
}

// 6
console.log(myWork);
