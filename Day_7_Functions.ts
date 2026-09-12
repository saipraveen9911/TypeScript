//Functions

/*
1. Named Functions
    1.a. Named function without parameter and  return type
    1.b. Named function with parameter and return type
    1.c. Named function without parameter and with return type
    1.d. Named function parameter and  with out return type
    1.e. named function with rest parameters
    1.f. Named function with optional parameters
2. Anonymous Function
    2.a. Anonymus function without parameter and  return type
    2.b. Anonymus function with parameter and return type
    2.c. Anonymus function without parameter and with return type
    2.d. Anonymus function parameter and  with out return type
    2.e. Anonymus function with rest parameters
    2.f. Anonymus function with optional parameters
3. Arrow Function/Lambda Function => used for playwright
    3.a. Arrow function without parameter and  return type
    3.b. Arrow function with parameter and return type
    3.c. Arrow function without parameter and with return type
    3.d. Arrow function parameter and  with out return type
    3.e. Arrow function with rest parameters
    3.f. Arrow function with optional parameters
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
