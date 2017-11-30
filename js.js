var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Marian';

var updateNames = allNames.push(newName);

function updateNames() {
    if (!(allNames.indexOf(newName) === newName)) {
       return updateNames;
    }
}