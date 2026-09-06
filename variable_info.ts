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

function varscope() {
  if (true) {
    var mymessage = "hello praveen";
    console.log("this is inside the if block" + mymessage);
  }
  console.log("this is outside if block" + mymessage);
}
//varscope();

//Example 2. named function block scope

function blockscope() {
  if (true) {
    let mymessage = "hello praveen";
    const year = 2026;
    if (true) {
      console.log("this is inside the nested if block", mymessage); // , => creates the single char space
      console.log("this is inside the nested if block" + year); // + doesnt creaet space
    }
  }
  //   console.log("this is outside if block" + mymessage);
  //   console.log("this is outside if block" + year);
}
blockscope();
