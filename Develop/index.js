const readmeDataArgs = process.argv.slice(2, process.argv.length);
const [fileName, data] = readmeDataArgs;

// TODO: Include packages needed for this application
var inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeToFile = (fileName, data) => {
    return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${fileName}</h1>
    <h2>/${data}</h2>
  </body>
  </html>
  `;
};

console.log(fileName, data);
console.log(writeToFile(fileName, data));


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();








/*

const printReadmeData = readmeDataArr => {
    readmeDataArr.forEach(readmeData => console.log(readmeData));
}
printReadmeData(readmeDataArgs);

*/