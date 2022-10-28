const minAge = 18;
const maxAge = 65;

let age = 65;

console.log("Is age greater than minAge?", age > minAge);
console.log("Is age greater than OR equal to minAge?", age >= minAge);

console.log("Is age less than maxAge?", age < maxAge);
console.log("Is age less than OR equal to maxAge?", age <= maxAge);

console.log("Is age the same as maxAge?", age == maxAge);
console.log("Is age NOT the same as minAge?", age != minAge);
console.log("Is age NOT the same as maxAge?", age != maxAge);

/* Strict Comparisons */
let age2 = 25;

console.log("age == 25", age2 == 25); // true
console.log('age == "25"', age2 == "25"); // true
console.log("age != 25", age2 != 25); // false
console.log('age != "25"', age2 != "25"); // false

console.log("age === 25", age2 === 25); // true
console.log('age === "25"', age2 === "25"); // false
console.log("age !== 25", age2 !== 25); // false
console.log('age !== "25"', age2 !== "25");
