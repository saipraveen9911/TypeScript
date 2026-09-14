// if condition, if else, if- else-if
// switch case

function if_statement() {
  // if statement
  if (true) {
    console.log("i am inside the if Condition");
  }

  // if-else statement
  if (false) {
    console.log("i am inside the if Condition");
  } else {
    console.log("i am inside the else block");
  }

  // if -elseif-else statement
  if (false) {
    console.log("i am inside the if Condition");
  } else if (true) {
    console.log("i am inside the else if block");
  } else {
    console.log("i am inside the else block");
  }

  if (false) {
    console.log("i am inside the if Condition");
  } else if (false) {
    console.log("i am inside the else if block");
  } else {
    console.log("i am inside the else block");
  }

  // we can write nested-if statement if required
}


function switch_statement(n:number) {
  
  switch (n) {
    case 1:
      console.log("day 1 -> monday");
      break;
    case 2:
      console.log("day 2 -> Tuesday");
      break;
    case 3:
      console.log("day 3 -> wednesday");
      break;
    case 4:
      console.log("day 4 -> thursday");
      break;
    case 5:
      console.log("day 5 -> friday");
      break;
    case 6:
      console.log("day 6 -> saturday");
      break;
    case 7:
      console.log("day 7 -> sunday");
      break;
    default:
      console.log("Give number 1 to 7");
      break;
  }
}
switch_statement(6)