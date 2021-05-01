const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

const generator = (markdown) => {
console.log(markdown);
return `${`   
    #${markdown.title}\n

    ## Description
    ${markdown.description}\n

    ## Table of Contents
    * [Installation](#Install)
    * [Usage](#Usage Instructions)
    * [Contribution](#Contribution Guidelines)
    * [Test Instructions](#Test Instructions)
    * [License](#License)\n

    ## Installation
    ${markdown.install}\n

    ## Usage Instructions
    ${markdown.usage}\n

    ## Contribution Guidelines
    ${markdown.contributing}\n

    ## Test Instructions
    ${markdown.tests}\n

    ## License
    ${markdown.choices}\n

    ## Contact:
    * Github Username: ${markdown.Username}
    * Email: ${markdown.email}\n
   `}`
}
// ## table of contents \n
// ${markdown.table}
inquirer
  .prompt([
    { //displaying project title of README
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
      name: 'Contributing',
    },
    { //section for test instructions
      type: 'input',
      message: 'Enter test instructions',
      name: 'Tests',
    },
    { //section for choosing License
      type: 'list',
      message: 'Choose your license',
      name: 'License',
      choices: [
          'Apache License v2.0',
       
          'GNU General Public License v3.0',
       
          'MIT License',
        ],   
    },
    { //Questions section with link to Github
      type: 'input',
      message: 'Enter Github username', 
      name: 'Username',
    },
    { //Questions section with instructions on how to reach 
      type: 'input',
      message: 'Enter email address', 
      name: 'email',
    },
   
  ])

    .then((markdown) => {
        const readMeString = generator(markdown);
        
        fs.writeFile(path.resolve(__dirname, './generatedReadMe/readme.js'), readMeString, (err) => 
    err ? console.error(err) : console.log('Success!')
  ); 
});

   