//1. arithmetic operator
let a: number = 5;
let b: number = 10;
let d = 1000;
let c = "5";

console.log(`addition of ${a} and ${b} is ${a + b}`); // addition
console.log(`subtraction of ${a} and ${b} is ${a - b}`); // subtraction
console.log(`multiplication of ${a} and ${b} is ${a * b}`); // multiplication
console.log(`division of ${a} and ${b} is ${a / b}`); // division. returns quotient
console.log(`modulus of ${a} and ${b} is ${a % b}`); // modulus returns remainder

// 2. Assignment Operators
console.log(`addition using assignment operator ${(a += 5)}`);
console.log(`Subtraction using assignment operator ${(a -= 5)}`);
console.log(`multiplication using assignment operator ${(a *= 5)}`);
console.log(`division using assignment operator ${(a /= 5)}`);
console.log(`modulus using assignment operator ${(a %= 5)}`);
console.log(`exponential using assignment operator ${(a **= 2)}`);

// 3. comparision operator
console.log(`this is Greater than ${a > b}`);
console.log(`this is Less than ${a < b}`);
console.log(`this is greater than or equal to ${a >= b}`);
console.log(`this is less than or equal to ${a <= b}`);
console.log(`this is equal to ${a == b}`);
// console.log(`this is strict equal to  ${a===c}`) // which is used to compare both alue and datatype
console.log(`this not equal to ${a != b}`);

// 4.Logical operator
console.log(`this is logical AND operator ${a < b && a < d}`);
console.log(`this is logical OR operator ${a < b || a < d}`);
console.log(`this is logical NOT operator ${!(a < b)}`);

//5. Increment or decrement operator
let i = 10,
  j = 20,
  k = 30,
  l = 40;
console.log(`this is Post-Increment i++ : ${i++}`); // prints the value and then increment the value
console.log(`this is Pre-Increment ++j : ${++j}`); // increments the value and the print the output
console.log(`this is Post-decrement k-- : ${k--}`); // print the value and then decrements the value
console.log(`this is Pre-Increment --l : ${--l}`); // decrements the value and then print the output

//6. Ternary operator
console.log(
  `the output is ${a > 20 ? "given value is greater than 20 " : "given value is less than 20"}`,
);
