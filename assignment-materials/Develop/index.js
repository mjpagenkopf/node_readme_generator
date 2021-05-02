// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{ //displaying project title of README
  type: 'input',
  message: 'What is your project title?',
  name: 'title',
},
{ //section for description
  type: 'input',
  message: 'Enter description of your project',
  name: 'description',
},
{ //section for installation instructions
  type: 'input',
  message: 'Enter installation instructions',
  name: 'install',
},
{ //section for usage information
  type: 'input',
  message: 'Enter usage information',
  name: 'usage',
},
{ //section for contribution guidelines
  type: 'input',
  message: 'Enter contribution guidelines',
  name: 'contribution',
},
{ //section for test instructions
  type: 'input',
  message: 'Enter test instructions',
  name: 'test',
},
{ //section for choosing License
  type: 'list',
  message: 'Choose your license',
  name: 'license',
  choices: [
      'Apache License v2.0',
   
      'GNU General Public License v3.0',
   
      'MIT License',
    ],   
},
{ //Questions section with link to Github
  type: 'input',
  message: 'Enter Github username', 
  name: 'username',
},
{ //Questions section with instructions on how to reach 
  type: 'input',
  message: 'Enter email address', 
  name: 'email',
},

];

// TODO: Create a function to write README file //function writeToFile(fileName, data) {}
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log('success');
    };
  });
};

// TODO: Create a function to initialize app //function init() {}
function init() {
  inquirer
  .prompt(questions)
  .then((data) => {
    writeToFile('README.md', generateMarkdown(data));
    console.log(data);
  });
};

// Function call to initialize app
init();