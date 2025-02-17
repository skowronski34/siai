// 1
let person = {
    name: "Dawid",
    age: 18,
    city: "Kabaty"
  };
  
  // 2
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  
  // 3
  let personArray = ["Dawid", 18, "Kabaty"];

  for (let i = 0; i < personArray.length; i++) {
    console.log(personArray[i]);
  }
  
  for (let index in personArray) {
    console.log(personArray[index]);
  }
  