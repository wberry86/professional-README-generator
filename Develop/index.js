// TODO: Include packages needed for this application
const inquirer = require("inquirer");

//const fs = require('fs');
//const writeToFile = require('./src/page-template');

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description of your project. (required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmContents",
      message: "Would you like to add a table of contents?",
      default: true,
    },
    {
      type: "input",
      name: "contents",
      message: "Please provide a list of contents:",
      when: ({ confirmContents }) => {
        if (confirmContents) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use.",
    },
    {
      type: "input",
      name: "License",
      message: "Provide license if applicable.",
    },
    {
      type: "input",
      name: "Contributing",
      message: "Provide a list of contributors if applicable.",
    },
    {
      type: "input",
      name: "Tests",
      message: "Provide examples of tests if applicable.",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub username.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email.",
    },
  ]);
};

promptUser().then((answers) => console.log(answers));

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
