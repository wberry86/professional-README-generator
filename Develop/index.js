// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");
//const writeToFile = require('./src/page-template');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
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
    type: "input",
    name: "installation",
    message: "Are there any installation requirements?",
  },
  {
    type: "input",
    name: "usage",
    message: "Are ther any usage instructions?",
  },
  

  {
    type: "confirm",
    name: "licenseConfirm",
    message: "Would you like to add a license?",
    default: false,
  },
  {
    type: "list",
    message: "Please choose a license:",
    name: "license",
    choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
    when: ({ licenseConfirm }) => {
      if (licenseConfirm) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "contributing",
    message: "Would you like to mention any contributors?",
    default: false,
  },
  {
    type: "input",
    name: "confirmContributing",
    message: "Please list any contributors:",
    when: ({ contributing }) => {
      if (contributing) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "tests",
    message: "Would you like to provide any examples of tests?",
    default: false,
  },
  {
    type: "input",
    name: "confirmTests",
    message: "Please list any test instructions:",
    when: ({ tests }) => {
      if (tests) {
        return true;
      } else {
        return false;
      }
    },
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Success! Information transferred to the README!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log('answers', userInput);
    writeToFile("README.md", generateMarkdown(userInput))
  });
}

// Function call to initialize app
init();
