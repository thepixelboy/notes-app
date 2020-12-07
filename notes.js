const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added.'));
  } else {
    console.log(chalk.red.inverse('Note title already exists.'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep.length === notes.length) {
    console.log(chalk.red.inverse('No note found!'));
  } else {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse('Note removed!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length > 0) {
    console.log(chalk.cyan.bold.inverse('Your notes:'));
    notes.forEach((note) => console.log('- ' + note.title));
  } else {
    console.log(chalk.red.inverse('No notes found!'));
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);

  if (noteToRead) {
    console.log(chalk.cyan(noteToRead.title));
    console.log(noteToRead.body);
  } else {
    console.log(chalk.red.inverse('No note found.'));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
