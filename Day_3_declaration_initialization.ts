/* 2. Declaration & initialization:

var,let : can be declared with or without initialization.
const   : must be initialized at the time of declaration

  3. redeclaration
var         :   allows redeclaration should be same datatype
let & const :   doesnt allow redeclaration

4. re-initialization or re-assignment
var,let     : can be reassigned
const       : cannot re assign the value

5. hosting
*/

function declaration_initialization() {
  // declaration
  var first;

  // output: Undefined because value is not initialized and
  // it is any data type by default
  console.log(`the value of variable ${first}`);
  // initialization
  first = 10;

  let second;
  // output: Undefined because value is not initialized
  console.log(`the value of variable ${second}`);

  // initilaization or re-asignment
  second = "string";

  // constant must be initilaized along with declaration
  const constant: string = "myconst";
}

declaration_initialization();

function Re_declaration_Re_initialization() {
  /* 3. redeclaration
var allows redeclaration
let & const doesnt allow redeclaration
*/
  var first = 100;
  let second = "babu";
  const constant: string = "myconst";

  var first = 1000; // Re-declaration  is possible but should be same datatype
  // let second;  // using let we cannot redeclare variable
  // const constant:string="myconst"; // using const we cannot redeclare variable

  first = 1000000; //Re-assignment
  second = "praveen"; //Re-assignment
  //constant="king";  // Re-assignment is not possible for Constant
}
Re_declaration_Re_initialization();
