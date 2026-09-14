// Tuple is special type of array
// where we can define number of elements,data type of each element and order of elements
// datatype declaration should folow with data
let student: [string, boolean, number] = ["Praveen", false, 2026];
/*
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
*/


/*
//Array of tuples
let students: [string, number][] = [
  ["praveen", 2025], //index 0
  ["babu", 2026], // index 1
  ["satya",20000], // index 2
  ["sai",2026] // index 3
];
console.log(students[0]) // returns the  ["praveen", 2025]
console.log(students[1]) // returns the  ["babu", 2026]

let m1=students[0]
console.log(m1[0])
console.log(m1[1])

*/

// Array methods
let Numberarray: number[] = [2, 5, 4, 7, 9];
let studentarray: Array<string> = [
  "Praveen",
  "Renuka",
  "Laxmi",
  "Satya",
  "Sanjana",
];

/*
// Push method
Numberarray.push(20, 21); // adds the lemets to last available index
console.log(Numberarray);
console.log("######################");

// pop method
let popvariable = Numberarray.pop(); // deletes the last elemnt of Numberarray
console.log(`The updaetd array is ${Numberarray}`);
console.log(`The value deleted from Numberarray is ${popvariable}`);
console.log("######################");

// shift method
let shifelemet=Numberarray.shift(); // Removes the 0th index value from Array
console.log(Numberarray);
console.log(`The value deleted 1st elemety from Numberarray is ${shifelemet}`);
*/
/*
//unshift 
studentarray.unshift("Raja","Niharika") // adds the element to zeroth index(beginning of array)
console.log(`The updaetd array is ${studentarray}`);
console.log()
*/
/*
//slice  Syntax: array,slice(start index,endindex)
let sliceelements=studentarray.slice(1,4) // endindex is Excluded in slice method and should be assigned to variable
console.log(`The Sliced array is from index 1 to index 3 ${sliceelements}`);

console.log() 
let sliceelement2=studentarray.slice(2,6) // output from index start to endeindex-1
console.log(`The Sliced array is  from index 2 to index 6 is ${sliceelement2}`);

// splice method
/*To add or remove elements from array
Syntax : Arrya.splice(startindex,deleteingcount,additem1,additem2...) 
*/

let myarray:string[]=[
  "Praveen",
  "Renuka",
  "Laxmi",
  "Satya",
  "Sanjana",
];

//let splicevar=myarray.splice(1,2) // delets 2 elemts from index 1
//console.log(splicevar) // output the what elements are deleted
//console.log(myarray) // remaining element afetr deleting the above elements
console.log(`original array :  ${myarray}`)
myarray.splice(2,0,"Babu","Deepa","RAJA")
console.log(myarray)

//Assignment print the tuple values using for-in, for-off loops
// Assignment: take new array using all the array methods 