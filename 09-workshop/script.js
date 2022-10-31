/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två (olika) specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */

let password;
// password = "password"; // inte giltigt
// password = "pa$sword"; // giltigt
// password = "p@ssw%rd"; // giltigt
password = "p@ssw%"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

console.log(`🕵🏻 Checking password '${password}'`);

const specialChars = [
	"@",
	"$",
	"%",
	"*",
	"^",
	"<",
	">",
	"?",
	"!",
	"(",
	")",
	"[",
	"]",
	"{",
	"}",
	"'",
];

let specialCharsCount = 0;
// FÖR varje specialtecken i listan,
// KOLLA om lösenordet innehållet det specialtecken vi är på
// OM lösenordet innehåller specialtecknet, ÖKA specialCharsCount med 1
// ANNARS gör ingenting
for (let i = 0; i < specialChars.length; i++) {
	const specialChar = specialChars[i];
	console.log(`Loop ${i}, password contains ${specialChar}?`, password.includes(specialChar));

	if (password.includes(specialChar)) {
		console.log(`YAY FOUND SPECIAL CHAR!!!!!!!!!! 🥳🥳🥳🥳`);
		specialCharsCount++;
	}
}


if (password.length >= 16) {
	console.log("- ✅ Great! That's a long password!");

} else if (password.length >= 12 && password.includes('-')) {
	console.log("- ✅ Great! That's a pretty good password!");

} else if (password.length >= 8 && specialCharsCount) {
	console.log("- ✅ Great! Such password, much secure, very hard to crack!");

} else if (password.length >= 6 && specialCharsCount >= 2) {
	console.log("- ✅ Great! Such secret squirrel, much special chars, impossible to crack!");

} else {
	console.log("- 🚨 Insecure password, my grandma can crack it!");

}
