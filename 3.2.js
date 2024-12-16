//1
let zakupy = [];
//2
zakupy.push("Mleko", "Pieczywo", "Jabłka");
//3
zakupy.splice(zakupy.indexOf("Pieczywo"), 1, "Banan", "Jajka");
//4
zakupy.pop()
console.log(zakupy);
//5
zakupy.sort();
//6
zakupy.indexOf("Mleko");
//7
zakupy.splice(1,0, "Marchew", "Sałata");
//8
let nowaLista = ["Sok", "Pop"];
//9
zakupy = zakupy.concat(zakupy, nowaLista, nowaLista)
//10
zakupy.lastIndexOf("Pop");
//11
console.log(zakupy);