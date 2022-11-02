/**
 * Workshop: Password Checker with functions
 *
 * STEG 1
 * Istället för att vi har lösenordet hårdkodat (dvs vi testar samma lösenord
 * alltid), fråga användaren efter ett lösenord och berätta därefter om det
 * är ett säkert lösenord eller ej.
 *
 * STEG 2
 * Lägg koden för att hitta antalet specialtecken i en egen funktion som tar
 * emot lösenordet att kontrollera som en parameter, och returnerar antalet
 * specialtecken som hittades i det mottagna lösenordet.
 *
 * STEG 3
 * Berätta för användaren om lösenordet var säkert eller ej med hjälp av
 * `alert` istället för `console.log`
 *
 *
 * GAMMAL KRAVSPECIFIKATION
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

// Should count number of special chars in `password` and return the count
const countSpecialChars = (password) => {

}

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
