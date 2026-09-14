function Array_Methods() {
  let Numberarray: number[] = [2, 5, 4, 7, 9];
  let studentarray: Array<string> = [
    "Praveen",
    "Renuka",
    "Laxmi",
    "Satya",
    "Sanjana",
  ];

  // Push method
  Numberarray.push(20, 21); // adds the Element to last index Output: [2, 5, 4, 7, 9,20,21]
  console.log(
    `The updated array after push method from NumberArray is ${Numberarray}`,
  );

  console.log("######################");

  //pop method
  let popvariable = Numberarray.pop(); // deletes the last element of Numberarray
  console.log(`The value deleted from Numberarray is ${popvariable}`);

  // shift method
  let shiftelemet = Numberarray.shift(); // Removes the 0th index value from Array
  console.log(Numberarray);
  console.log(
    `The value deleted 1st elemety from Numberarray is ${shiftelemet}`,
  );

  //unshift
  studentarray.unshift("Raja", "Niharika"); // adds the element to zeroth index(beginning of array)
  console.log(`The updated array is ${studentarray}`);
  console.log();

  //slice  Syntax: array,slice(start index,endindex) // output from index start to endeindex-1
  let sliceelements = studentarray.slice(1, 4); // endindex is Excluded in slice method and should be assigned to variable
  console.log(`The Sliced array is from index 1 to index 3 ${sliceelements}`);

  console.log();
  let sliceelement2 = studentarray.slice(2, 6); // output from index start to endeindex-1
  console.log(
    `The Sliced array is  from index 2 to index 6 is ${sliceelement2}`,
  );

  //splice method
  /*To add or remove elements from array
Syntax : Arrya.splice(startindex,deleteingcount,additem1,additem2...) 
*/

  let myarray: string[] = ["Praveen", "Renuka", "Laxmi", "Satya", "Sanjana"];

  let splicevar = myarray.splice(1, 2); // deletes 2 elements from index 1
  console.log(splicevar); // output the what elements are deleted
  console.log(myarray); // Remaining element after deleting the above elements
  console.log(`original array :  ${myarray}`);

  myarray.splice(2, 0, "Babu", "Deepa", "RAJA");
  console.log(myarray);
}

//Assignment print the tuple values using for-in, for-off loops
// Assignment: take new array using all the array methods
