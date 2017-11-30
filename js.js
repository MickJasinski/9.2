var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Marian, Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Marian';

var updatedNames = allNames.push(newName);

function updateNames() {
    if ([allNames.indexOf(newName) === -1]) {
       return updatedNames;
    }
}