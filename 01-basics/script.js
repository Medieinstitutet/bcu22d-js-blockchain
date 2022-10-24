// alert("Hello, World!");

// let msg = "Hello, World!";

/*
let msg;
msg = "I'm created on the line below";

console.log(msg);
console.log(msg);
console.log(msg);

msg = "I overwrote my friend";
console.log(msg);
console.log(msg);
*/

/*
let firstName = "Johan";
const lastName = "Nordström";

// let experienceLevel = 1337;

console.log(firstName);
console.log(lastName);
console.log(experienceLevel);
console.log(firstName, lastName, experienceLevel);

console.log(firstName + " " + lastName + " experience level: " + experienceLevel);

// firstName = "Pelle";
// lastName = "Svanslös";

// console.log("I will never be run");
*/

let myName = "Johanh";
console.log("Name is:", myName);

console.log("Length of name is:", myName.length);  // 5

console.log("First char in name is:", myName[0]);  // "J"
console.log("Second char in name is:", myName[1]);  // "o"
console.log("Last char in name is:", myName[myName.length - 1]);  // "n"

console.log("Name SHOUTED is:", myName.toUpperCase());  // "JOHAN"
console.log("Name after shouting is:", myName);

console.log("Name whispered is:", myName.toLowerCase());  // "johan"

console.log("Position of 'J':", myName.indexOf('J'));  // 0
console.log("Position of 'h':", myName.indexOf('h'));  // 2
console.log("Position of last 'h':", myName.lastIndexOf('h'));  // 5

console.log("Position of 'k':", myName.indexOf('k'));  // -1 (does not exist)

console.log("Slice of Johan:", myName.slice(1, 4));  // "oha"

console.log("Does name contain 'a'?", myName.includes('a')); // true
console.log("Does name contain 'e'?", myName.includes('e')); // false

/**
 * Micro-workshop
 */

let email;
// email = "johan.nordstrom@elevera.org";
// email = "jn@thehiveresistance.com";
// email = "jn@haxxor.co.uk";
email = "johan.nordstrom@mil.gov.edu.com";

// 1. Skriv ut positionen för den sista punkten i variabeln `email`, oavsett hur lång/kort `email` är
console.log("Last dot is at position:");

// 2. Skriv ut topp-domänen från e-postadressen (alltså det som står i `email` efter den sista punkten)
console.log("The top domain is:");  // ".com" "com"
