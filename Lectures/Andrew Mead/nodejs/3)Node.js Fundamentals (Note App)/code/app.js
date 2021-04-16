const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;
let command = argv._[0];
// console.log('Command', command);
// console.log('Process', process.argv);

debugger;
if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if(note) {
    console.log('Note Adedd');
    notes.logNote(note);
  } else {
    console.log('Note Title already exists');
  }
} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => {
    notes.logNote(note);
  });
} else if (command === 'read') {
  let note = notes.getNote(argv.title);
  if (note) {
    console.log(`Note Found`);
    notes.logNote(notw);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  if(noteRemoved) {
    console.log('Note was removed');
  } else {
    console.log('Note was not removed');
  }
} else {
  console.log('Provide some command');
}
