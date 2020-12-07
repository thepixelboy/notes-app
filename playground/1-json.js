const fs = require('fs');

// const book = {
//   title: 'Ego is my Enemy',
//   author: 'Ryan Holiday',
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'John Doe';
data.age = 30;

const JSONdata = JSON.stringify(data);
fs.writeFileSync('1-json.json', JSONdata);
