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

  //slice  Syntax: array.slice(start index,endindex) // output from index start to endeindex-1
  let sliceelements = studentarray.slice(1, 4); // endindex is Excluded in slice method and should be assigned to variable
  console.log(`The Sliced array is from index 1 to index 3 ${sliceelements}`);

  console.log();
  let sliceelement2 = studentarray.slice(2, 6); // output from index start to endeindex-1
  console.log(
    `The Sliced array is  from index 2 to index 6 is ${sliceelement2}`,
  );

  //splice method
  /*To add or remove elements from array
Syntax : Array.splice(startindex,deleteingcount,additem1,additem2...) 
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


//indexof => finds the index of particular element
let studentarray: Array<string> = [
    "Praveen",
    "Renuka",
    "Laxmi",
    "Satya",
    "Sanjana",
  ];

  /*
  console.log(`the index of elemet 'Laxmi' is ${studentarray.indexOf("Laxmi")}`)
  console.log(studentarray.indexOf("Mr.X")) // if element not available it return -1
  console.log(studentarray.indexOf("Laxmi",1)) // it starts searching from index: 1 
*/

  //includes method
 // console.log(studentarray.includes("Satya")) // return the boolean value. if present = true
 //console.log(studentarray.includes("Mr.X")) 

 //tostring
 
 
/*
 let tostring=Numberarray.toString()

 console.log(tostring)

 let arraystr:Array<string> =['H','e','l','l','o']

 console.log(arraystr)

 let c=arraystr.toString()

 console.log(c)
*/
 //map method***
 //take input as array and performs actiona and returns array

 let lowerarray:Array<string>=["praveen",
    "renuka",
    "laxmi",
    "satya",
    "sanjana"]

    
    let UpperArray=lowerarray.map((newarray) =>{
      return newarray.toUpperCase()
    } )
    console.log(UpperArray)

     let result2=lowerarray.map((newarray) => newarray.toUpperCase() )
     console.log(result2)
      
let Numberarray: number[] = [2, 5, 4, 7, 9];
    let result = Numberarray.map((num)=>{
      return num*2
    })
console.log(result)


