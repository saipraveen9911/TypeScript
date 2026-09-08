/* primitive data types

number, string, boolen, any, union,null, undefined, void

*/

/* Non -primitive datatypes

Arrays, class, function, object, tuple, interface

*/
//Number data type

let int: number = 50;
let float: number = 99.9;

// String DataType
// can be written in single-quote, double quote,

let first_name: string = "sai";
let middle_name: string = "praveen";
let last_name: string = `hello ${first_name} ${middle_name} babu`;
console.log(last_name);

// boolean
let isemployee: boolean = true;
let lostjob: boolean = false;

console.log(isemployee);
console.log(lostjob);

// any datatype
let anyvariable: any;
anyvariable = 10;
anyvariable = "hello";
anyvariable = true;
anyvariable = null;
anyvariable = undefined;

console.log(anyvariable);

// union data type
let union: number | string | boolean;
union = 10;
union = "hello";
union = true;

// null and undefined
let nullvalue: null = null;
let undefinedvalue: undefined = undefined;
