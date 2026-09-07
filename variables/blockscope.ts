//let, const are clockscope means declared varible can be accessed with in that block only.

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