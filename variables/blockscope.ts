//let, const

function blockscope() {
  if (true) {
    let let_variable = "I am let inside function outside if location";
    const CONST_VARIABLE = "I am CONST inside function outside if location";

    console.log("LET:", let_variable);
    console.log();
    console.log("CONST:", CONST_VARIABLE);
    console.log();
  }
}
blockscope()