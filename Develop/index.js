// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require('fs');
//const writeToFile = require('./src/page-template');
const generateMarkdown = require('./utils/generateMarkdown');

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
      type: "confirm",
      name: "installation",
      message: "Are there any installation requirements?",
      default: true,
    },
    {
      type: "input",
      name: "steps",
      message: "Please provide a list:",
      when: ({ installation }) => {
        if (installation) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "How is this application used?",
    },
    {
      type: "checkbox",
      message: "License?",
      name: "license",
      choices: [
        "[MIT License](LICENSE.txt)", 
        "[GNU GPLv3 License](COPYING.txt)", 
      ]
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
  ];



/*
promptUser()
  .then(readmeData => {
    const pageHTML = writeToFile(readmeData);

     fs.writeFile('./index.html', pageHTML, err => {
       if (err) throw new Error(err);

       console.log('Readme complete! Check out index.html in this directory to see it!');
    });
  });
  */


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
      if (err)
          throw err;
      console.log('Success! Information transferred to the README!')
  });
};


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
      console.log(userInput)
      writeToFile("README.md", generateMarkdown(userInput));
  });
};

// Function call to initialize app
init();


