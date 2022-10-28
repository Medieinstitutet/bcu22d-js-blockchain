let test = "JavaScript 101";
let student = "Newbie Coder";
let points = 1337;

/* I detta exempel konkatenerar vi strängar och variabler (gamla sättet) */
let msg =
	"Hi " +
	student +
	", your results on " +
	test +
	" was " +
	points +
	" points";
console.log(msg);

/* Här använder vi istället template strings ``, vilket gör det hela enklare,
	mer läsbart, osv. */

let message = `Hi ${student} your result on ${test} was ${points} points`;
console.log(message);

// Vi kan även skriva HTML i template strings och senare lägga till i DOMen.
let html = `<article>
                <p>"Template string", are awesome!</p>
            </article>`;
