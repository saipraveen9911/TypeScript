//var, let, const

/* 1. scope
2. declaration
3. re declaration
4. re-initialization or re-assignment
5. hosting
*/

/* scope
 var => functional Sope
 let & const => block scope
 */

//Example 1. named function functional scope
//var var_variable = "i am var in global location";
//let let_variable = "I am let in global location";
//const CONST_VARIABLE = "i am const in global Location";


/*
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

*/

