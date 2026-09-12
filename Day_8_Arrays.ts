// 11/09/2026
/* Arrays: collection of Elements

*/

//normal declaration of array
let array: number[] = [];

// declaration of array using generic datatype
let array1: Array<string> = [];

// declaring the array using Generic Array type with multiple datatype(union datatype)
let array2: Array<number | string | boolean> = [];

// adding the elements to array
array[0] = 1122;
array[1] = 30303;

console.log(`the updated Array is [${array}]`);
