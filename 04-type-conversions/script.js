/**
 * Type Conversion
 * https://javascript.info/type-conversions
 */

let sum = 100;
console.log("sum", sum, typeof sum);

let points = 25;
console.log("sum", points, typeof points);

let batman = "Batman";
console.log("Batman:", batman, typeof batman);

let stringPoints = "25";
console.log("stringPoints:", stringPoints, typeof stringPoints);

// Type Conversion
let sumPoints = sum + points; // 100 + 25
console.log("sumPoints:", sumPoints, typeof sumPoints);

let sumStringPoints = sum + stringPoints; // 100 + "25"
console.log("sumStringPoints:", sumStringPoints, typeof sumStringPoints);

// Convert string to number
let convertedStringPoints = Number(stringPoints); // 25
console.log(
	"convertedStringPoints:",
	convertedStringPoints,
	typeof convertedStringPoints
);

let convertedBatman = Number(batman);
console.log("convertedBatman:", convertedBatman, typeof convertedBatman);

let result = Boolean("I am groot"); // true
console.log("result:", result, typeof result);
