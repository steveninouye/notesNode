// var personString = '{"name": "Andrew","age": 25}';
// console.log(personString.name);
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person.name);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);