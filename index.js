// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is your projects title?',
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'Please enter a short description of your project.',
  },
  {
    type: 'input',
    name: 'installationSteps',
    message: 'What command should you enter to install dependencies?',
  },
  {
    type: 'input',
    name: 'projectUse',
    message: 'What should the user need to know about using your repository?',
  },
  {
    type: 'input',
    name: 'projectContribute',
    message: 'What should the user need to know about contributing to your repository?',
  },
  {
    type: 'input',
    name: 'projectTest',
    message: 'What command should be used to run tests?',
  },
  {
    type: 'input',
    name: 'projectLicense',
    message: 'What license should your project have?',
  },
  {
    type: 'input',
    name: 'userName',
    message: 'What is your github user name?',
  },
  {
    type: 'input',
    name: 'userEmail',
    message: 'What is your email address?',
  },
])
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
