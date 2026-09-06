function funscope() {
  /* var is functional scope
means var declared in function can be accessed every where in same function only
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
