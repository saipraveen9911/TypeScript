// Tuple is special type of array
// where we can define number of elements,data type of each element and order of elements
// datatype declaration order should folow by data
let student: [string, boolean, number] = ["Praveen", false, 2026];

console.log(student[0]);
console.log(student[1]);
console.log(student[2]);

//Array of tuples
let students: [string, number][] = [
  ["praveen", 2025], //index 0
  ["babu", 2026], // index 1
  ["satya", 20000], // index 2
  ["sai", 2026], // index 3
];
console.log(students[0]); // returns the  ["praveen", 2025]
console.log(students[1]); // returns the  ["babu", 2026]

let m1 = students[0];
console.log(m1[0]);
console.log(m1[1]);
