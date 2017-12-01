var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Marian', 'Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Marian';


if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}