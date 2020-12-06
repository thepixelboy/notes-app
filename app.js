const chalk = require('chalk');
const getNotes = require('./notes');

const notes = getNotes();
console.log(notes);

console.log(chalk.green('Success!'));
console.log(chalk.green.bold('Success! (Bold)'));
console.log(chalk.green.bold.inverse('Success! (Bold & Inverse)'));
