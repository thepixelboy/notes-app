const chalk = require('chalk');
const getNotes = require('./notes');

const notes = getNotes();
console.log(notes);

console.log(chalk.blue.bold.inverse('Success!'));
