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

// Function Expression
const add = function(a, b) {
	console.log("I'm gonna add these two numbers:", a, b);
	const sum = a + b;

	a = a - 1;
	b = b + 1;

	console.log("The modified numbers are:", a, b);

	return sum;
}

// const fourPlusEight = add(4, 8);
// console.log("The result of add(4, 8) is:", fourPlusEight);

let x = 42;
let y = 1295;

const res = add(x, y);
console.log("res:", res);

console.log("x:", x);
console.log("y:", y);
