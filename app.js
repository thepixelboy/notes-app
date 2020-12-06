const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Ruben.');

fs.appendFileSync(
  'notes.txt',
  `\n\nThis is me appending text to notes.txt using appendFileSync.`
);

//
// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text
