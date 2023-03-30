/* VARIABLE DECLARATION */

// Creating (declaring) variable
let a = 5;

// Create a const if u sure that it will never be redeclared
const myConst = 10;

// var is just old and bad

// Common practice if u name some tokens, codes, etc. to CAPSLOCKED consts
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// Naming vars
// Valid ones:
let userName;
let test123;


// Creating variable with a function
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Not so
let 1a; // cannot start with a digit
let my-name; // hyphens '-' aren't allowed in the name

/* DATATYPES INTRODUCTION */
// 1..........
// Number type
let n = 123;    // integer
m = 12.345;     // float    
console.log(n + m);
console.log(n - m);
console.log(n * m);
console.log(n / m);
// Crazy ass numbers
console.log(1 / 0);     // infinity
console.log("im not a fucking number" / 2);     // he said that.. 

// Increment and Decrement
let counterC = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1




/* 
The operators ++ and -- can be placed either before or after a variable.

When the operator goes after the variable, it is in “postfix form”: counter++.
The “prefix form” is when the operator goes before the variable: ++counter. 
*/

// 2..........
// Strings inroduction
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
console.log(phrase);


// You can concatenate (merge) strings
let concatStr = "sofa" + " krasotka";
// If you have a number it converts to string
let intStr = "i have " + 5 + " cm dick";
console.log(concatStr, intStr);



