/* for loop, while loop , do while
for loop: it used to iterate the statement for given condition
for(declaration&initialization;condition;increment)
{
//statement}

while loop: the statement inside the whle loop wnen the contionis true
while(condition)
{
//statement
}

do-while: the statement execute atleast once before checking the condition
do {
//statement
}while(condition)

*/
console.log("################### for Loop ###################");
// for loop
function for_loop(n: number) {
  for (let i = 0; i < n; i++) {
    console.log(`the value of iteration: ${i}`);
  }
}

for_loop(5);
console.log("################### While Loop ###################");
//While loop
// when the condition is true it execute the while statement
function while_loop(n: number) {
  while (n > 0) {
    console.log(`the value of iteration: ${n}`);
    n--;
  }
}

while_loop(5);

console.log("################### do While Loop ###################");
//do While loop
// it executes atleast once & then check for condition is true it execute the dowhile statement
function do_while_loop(n: number) {
  do {
    console.log(`the value of iteration: ${n}`);
    n--;
  } while (n > 0);
}

do_while_loop(5);
