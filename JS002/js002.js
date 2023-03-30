// DATATYPES */

// Strings continued. What about single/double ticks
const sgl = 'Single quotes.';
const dbl = "Double quotes";
console.log(sgl);
console.log(dbl);

// Not working
// const badQuotes = 'What on earth?";

// How about this?
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

// You can insert variables in strings
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

// Or use this technique for concat
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

// There are methods for extracting part of the string
/* slice(start, end);
su
bstring(start, end);
substr(start, length); */

let slicedString = two.slice(0, 6);
console.log(slicedString);

// Index starts from 0, and -1 is the last letter index

// You can write strings in multiple lines, if they are too long (max 80-100 char)
const output = `I like the song.
I gave it a score of 90%.`;
console.log(output);

// Convert to uppercase or lowercase
let text = "Hello World!";
text = text.toUpperCase();
console.log(text);

text = "Hello World!";       // String
text = text1.toLowerCase();  // text2 is text1 converted to lower

// One more way to concat with a method concat()
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

// You can delete whitespaces from string with a trim() method
text = "      Hello World!      ";
text = text1.trim();


// charAt(index) can get you a char from string by index
text = "HELLO WORLD";
let char = text.charAt(0);

// A string can be converted to an array with the split() method:
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe


// THATS IT


