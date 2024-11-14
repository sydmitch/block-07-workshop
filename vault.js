/* Pseudocode: 
3 different variables, use arithmetic operators
addition, division, subtraction
display string+variables in alert box showing code to the vault*/

//create string to show message to user using let and console.log//
let greeting = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
console.log(greeting);

/*testing another way to show message via concacetate, comment it out
const string1 = "You have received this message because ";
const string2 = "you have been chosen to open ";
const string3 = "an important vault. ";
const string4 = "Here is the secret combination:";
const fullString = string1 + string2 + string3 + string4;
console.log(fullString);*/

/*assign three variables using a unique arithmetic operator
equaling one of the three codes in the combination*/

//addition operator equaling code one//
const calc1 = 5 + 5;
console.log(calc1);

//division operator equaling code two//
const calc2 = 80 / 2;
console.log(calc2);

//subtraction operator equaling code 3//
const calc3 = 45 - 6;
console.log(calc3);

//popup dialog box showing message and vault codes - using alert()//
alert(greeting + " " + calc1 + "-" + calc2 + "-" + calc3);
