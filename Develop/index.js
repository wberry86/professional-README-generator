
// TODO: Include packages needed for this application
const inquirer = require('inquirer');

//const fs = require('fs');
//const writeToFile = require('./src/page-template');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your project?'
    }
  ])
  .then(answers => console.log(answers));

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


//fs.writeFile('index.html', writeToFile(fileName, data), err => {
    //if (err) throw err;

    //console.log('Readme complete! Check out index.html to see the output!');
//});


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