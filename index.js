// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title for your project?',
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'Please enter a short description of your project.',
  },
  {
    type: 'input',
    name: 'installationSteps',
    message: 'What command should you enter in the terminal to install dependencies?',
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
    type: 'list',
    name: 'projectLicense',
    message: 'What license should your project have?',
    choices: ['no license', 'mit', 'apache', 'agp1']
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
.then((answers) => {
  const templatePath = `${__dirname}/README-template.md`;
  const readmePath = `${__dirname}/SAMPLEREADME.md`;

  
  fs.readFile(templatePath, 'utf8', (err, data) => {
    if (err) throw err;

    
    data = data.replace(/{{ projectTitle }}/g, answers.projectTitle);
    data = data.replace(/{{ projectDescription }}/g, answers.projectDescription);
    data = data.replace(/{{ installationSteps }}/g, answers.installationSteps);
    data = data.replace(/{{ projectUse }}/g, answers.projectUse);
    data = data.replace(/{{ projectContribute }}/g, answers.projectContribute);
    data = data.replace(/{{ projectTest }}/g, answers.projectTest);
    data = data.replace(/{{ projectLicense }}/g, answers.projectLicense);
    data = data.replace(/{{ userName }}/g, answers.userName);
    data = data.replace(/{{ userEmail }}/g, answers.userEmail);

    
    fs.writeFile(readmePath, data, (err) => {
      if (err) throw err;
      console.log('README generated successfully!');
    });
  });
});
