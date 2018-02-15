var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

function addName(newName) {
	if (allNames.indexOf(newName) === -1) {
		allNames.push(newName);
		console.log ('Dodano imię "' +newName + '".');
	}
		else {
			console.log('Imię "' + newName + '" już występuje w bazie.');
		}
}

addName('Ola');
addName('Marian');
console.log(allNames);
