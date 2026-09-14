/* keywords to declare variable : var, let, const

// Aspects of variables
1. scope
2. declaration & initialization
3. re declaration
4. re-initialization or re-assignment
5. hosting
*/

/* scope
 var => it is functional scope i.e declared  variable can be accessed every where in same function only
 let & const => it is block scope i.e declared variable can be accessed every where inside the block that particular block only
 */



//functional scope
function funscope() {
  /*
   */

  if (true) {
    // declaring the variable
    var var_variable = "I am var in functional(if block)";

    // prinitng the data on console with in the block
    console.log(`1st console log block ${var_variable}`);
  }
  // prinitng the data on console which can be acccessed out side the block
  console.log(`2st console log block ${var_variable}`);
}
// console.log(var_variable);  // cannot be accessed since variable present inside function
funscope();

//let, const are blockscope means declared varible can be accessed with in that block only.

function blockscope() {
  if (true) {
    let let_variable = "I am let inside function outside if location";
    const CONST_VARIABLE = "I am CONST inside function outside if location";

    console.log("LET:", let_variable);
    console.log();
    console.log("CONST:", CONST_VARIABLE);
    console.log();
  }

  // let & const cannot be accessed here means it is declared inside the if block
}
blockscope()


//Example 2. named function block scope
function allscope() {
  let let_variable = "I am let inside function outside if location";
  var var_variable = "I am var inside function outside if location";
  const CONST_VARIABLE = "i am CONST inside function outside if location";
  if (true) {
    let let_variable =
      "I am let re initialized inside function inside if location";
    var var_variable =
      "I am var re initialized inside function inside if location";
    const CONST_VARIABLE =
      "i am const re initialized inside function inside if location";
    if (true) {
      console.log("LET:", let_variable);
      console.log();
      console.log("VAR:", var_variable);
      console.log();
      console.log("CONST:", CONST_VARIABLE);
      console.log();
    }
  }
  // let is block scope so newly assigned value is not updated
  console.log(let_variable);
  console.log();
  //var functional scope so value is replace with newly assigned value
  console.log(var_variable);
  console.log();
  // CONST is block scope so newly assigned value is not updated
  console.log(CONST_VARIABLE);
}
//allcope();
