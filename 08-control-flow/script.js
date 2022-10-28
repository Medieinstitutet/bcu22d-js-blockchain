/** Control Flow
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

 * Conditionals
 * https://www.javascripttutorial.net/javascript-if/
 * (see also if-else and if-else-if)
 *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
 * */
const minAge = 18;
const maxAge = 65;

let age = 40;

if (age > 18) {
	console.log("Får handla!");
} else {
	console.log("Får ej handla!");
}

/**
 * Ternary Operator
 * https://www.javascripttutorial.net/javascript-ternary-operator/
 */
let message;
message = age > 10 ? "Får Handla!" : "Får ej handla";

console.log(message);

/**
 * Logical Operators
 * https://www.javascripttutorial.net/javascript-logical-operators/
 *
 * && = AND (both has to be true)
 * || = OR (at least one has to be true)
 */

if (age >= 18 && age <= 65) {
	console.log("Får handla!");
} else {
	console.log("Får ej handla!");
}

let username = "johan";

if (username === "dave" || username === "johan") {
	console.log(`I'm sorry ${username}, I can't open the doors.`);
} else {
	console.log("Welcome!");
}

/* Mer avancerade loops */
if (age >= minAge && age <= maxAge) {
	console.log(`You are between ${minAge} and ${maxAge} years old, congrats!`);
} else if (age < minAge) {
	console.log("Too young! 👶🏽");
} else {
	console.log("Too old! 👵🏻");
}

/* Och en nivå till med if-sats i if-sats */
if (age >= minAge && age <= maxAge) {
	if (age == minAge) {
		console.log("Congrats on your first change to buy drinks.");
	} else {
		console.log(
			`You are between ${minAge} and ${maxAge} years old, congrats!`
		);
	}
} else if (age < minAge) {
	console.log("Too young! 👶🏽");
} else {
	console.log("Too old! 👵🏻");
}

/**
 * Loops & Iteration
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 * */

for (let i = 0; i < 10; i++) {
	console.log("Runt runt vi går.", i);
}

/*******/

let students = [
	"Deadpool", // 0
	"Black Widow", // 1
	"Iron Man", // 2
	"Spider-Man", // 3
	"Wanda", // 4
	"Thanos", // 5
];

/** FOR-loop
 *  https://www.javascripttutorial.net/javascript-for-loop/
 **/
for (let index = 0; index < students.length; index++) {
	console.log(`Student at index ${index} is: ${students[index]}`);

	if (students[index] == "Iron Man") {
		break;
	}
}

/* WHILE-loop
 *  https://www.javascripttutorial.net/javascript-while-loop/
 **/
let count = 0;
while (count < students.length) {
	console.log(`Student at index ${count} is: ${students[count]}`);

	count++;
}

students.forEach(function (arrayItem, index) {
	console.log(`Student at index ${index} is: ${arrayItem}`);
});

students.forEach((arrayItem, index) =>
	console.log(`Student at index ${index} is: ${arrayItem}`)
);
