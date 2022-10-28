let test = "JavaScript 101";
let student = "Newbie Coder";
let points = 1337;

let msg =
	"Hi " +
	student +
	", your results on " +
	test +
	" was " +
	points +
	" points";
console.log(msg);

let message = `Hi ${student} your result on ${test} was ${points} points`;
console.log(message);

let html = `<article>
                <p>"Template string", are awesome!</p>
            </article>`;
