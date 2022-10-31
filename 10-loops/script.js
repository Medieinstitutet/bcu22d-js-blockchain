/**
 * Loops ∞
 */

/**
 * for-loop
 */
/*
let sum = 0;
let points = [1, 5, -50, 10, 35, 80, 3];

for (let i = 0; i < points.length; i++) {
	console.log(`At index ${i}, number is:`, points[i]);

	// if number is 0 or less, continue to next loop
	if (points[i] <= 0) {
		console.log("Found a 0 or negative points, skipping");
		continue;
	}

	// add points[i] to sum
	sum = sum + points[i]
	console.log("New sum is:", sum);

	// if sum is 50 or greater, break free from the loop
	if (sum >= 50) {
		console.log("You got maximum score! Stopping further counting");
		break;
	}
}

console.log("The sum of all numbers is:", sum);
*/


/**
 * while-loop
 * runs 0 or more times
 */
/*
let i = 5;
while (i < 5) {
	// do stuff
	console.log("in while-loop, i is:", i);
	i++;
}

// finished looping
console.log("Finished looping, i is:", i);
*/

/**
 * do while
 * runs *at least* 1 time
 */
/*
let i = 5;
do {
	// do stuff
	console.log("in do-while-loop, i is:", i);
	i++;
} while (false);

// finished looping
console.log("Finished looping, i is:", i);
*/

/**
 * switch-statement
 */
let grade = "MVIG";
switch (grade) {
	case "VG":
		// grade is "VG"
		console.log("🥳 Nice!! You got a VG");
		break;

	case "G":
		// grade is "G"
		console.log("🆗 Excellent! You got a G");
		break;

	case "IG":
		// grade is "IG"
		console.log("😔 Sorry, you got an IG");
		break;

	default:
		// grade is something else
		console.log("😡 Why you try 🐅 cheating?!");
		break;
}

console.log("I'm done with loops");
