//Functions

/*
1. Named Functions
    1.a. Named function without parameter and  return type
    1.b. Named function with parameter and return type
    1.c. Named function without parameter and with return type
    1.d. Named function parameter and  with out return type
2. Anonymous Function
3. Arrow Function/Lambda Function => used for playwright
*/

//1. Named function

// 1.a function with out parameter and return type
function myfunction(): void {
  console.log(`This is function without variable and return type`);
}
console.log();
myfunction();
console.log();
console.log("#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#");
console.log();

//1.b function with parameter and return type
function Addition(a: number, b: number): number {
  return a + b;
}
console.log("I am a function with parameter & retrurn type");
console.log();
console.log(`Output: Sum of given 2 numbers is ${Addition(5, 6)}`);
console.log();
console.log("#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#");
console.log();

//1.c. Named function without parameter and with return type
function noparameneter(): string {
  return "I am a function with no prameter";
}
console.log();
console.log("output: ", noparameneter());
console.log();
console.log("#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#");
console.log();

//1.d. Named function parameter and  with out return type
function Addition2(a: number, b: number): void {
  console.log(a + b);
}
Addition2(5, 6);
console.log();
console.log("#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#");
console.log();
