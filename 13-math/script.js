/**
 * Math 🧮😳
 */

/**
 * Tests if `a` is an odd number
 *
 * Returns true if `a` is odd
 * Returns false if `a` is even
 */
const is_odd = (a) => {
	/*
	if (a % 2 === 1) {
		// a is odd
		return true;
	} else {
		// a is even
		return false;
	}
	*/

	/*
	if (a % 2) {
		// a is odd
		return true;
	} else {
		// a is even
		return false;
	}
	*/

	return (a % 2)
		? true
		: false;
}

is_odd(3); // true
is_odd(8); // false

/**
 * Useful(?) Math functions
 *
 * Math.round() - rounds a decimal number up or down
 * Math.floor() - rounds a decimal number down
 * Math.ceil()  - rounds a decimal number up
 */

/**
 * Returns a random number between 1-10
 */
const getRandomNumber = () => {

}
