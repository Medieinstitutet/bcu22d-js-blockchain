/**
 * Functions
 *
 * Function Declarations       var
 * Function Expressions        let/const
 * - Function
 * - Arrow Functions
 */

// Function Declaration
/*
function add() {
	console.log("I'm gonna add two numbers, even though i didnt exist when i was called");
}
*/

/*
// Function Expression
const add = function(a, b) {
	// long version
	// const sum = a + b;  // sum = 1337
	// return sum;         // return 1337

	// short version
	return a + b;       // return 1337
}

// const fourPlusEight = add(4, 8);
// console.log("The result of add(4, 8) is:", fourPlusEight);

let x = 42;
let y = 1295;

const res = add(x, y);
console.log("res:", res);

console.log("x:", x);
console.log("y:", y);
*/

// Function Expression
const greetUser = function(name = "anonymous", time = "day") {
	console.log(`Good ${time}, ${name}`);
}

// greetUser("Johan", "afternoon");
// greetUser("Pelle");
// greetUser();

// Arrow Function
const greetUserArrow = (name = "anonymous", time = "day") => {
	console.log(`Good ${time}, ${name}`);
}

// One-line function
// const addLong = (a, b) => {
// 	return a + b;
// }

// const addShort = (a, b) => a + b;
