/**
 * Skapa array:er på sätt. Antingen med new Array() eller [].
 */

let emptyArray = new Array(); // creates empty Array
console.log(emptyArray);

let setArray = new Array(10); // creates array of length 10
console.log(setArray);

let startArray = new Array(9, 5, 235, "Hello", 23);
console.log(startArray);

//________________

let students = ["Luke", "Leia", "Vader"];
console.log(students);
console.log(students[2]);

console.log(students.length);

//_________________

/* Basic array methods  */

students.push("Yoda"); // Add to end of array
console.log(students);

students.unshift("Grogu"); // Add to start of array
console.log(students);

let yoda = students.pop(); // Remove from end of array
console.log(students);
console.log(yoda);

let grogu = students.shift(); // Remove from start of array
console.log(students);
console.log(grogu);

let index = students.indexOf("Vader"); //Find index of value
console.log(index);

names = students.join(", "); // Adds all the elements of an array into a string
console.log(`The students names are: ${names}`);
