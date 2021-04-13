const readmeDataArgs = process.argv.slice(2, process.argv.length);


// TODO: Include packages needed for this application
var inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const printReadmeData = readmeDataArr => {
    readmeDataArr.forEach(readmeData => console.log(readmeData));
}
    


printReadmeData(readmeDataArgs);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

