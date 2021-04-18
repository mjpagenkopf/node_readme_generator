const fs = require("fs");

const inquirer = require("inquirer");

console.log(inquirer);
console.log(fs);
inquirer //
  .prompt([
    { //displaying project title of README
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    { //section for description
      type: 'input',
      message: 'Enter description of your project',
      name: 'Description',
    },
    { //section for installation instructions
      type: 'input',
      message: 'Enter installation instructions',
      name: 'Install',
    },
    { //section for usage information
      type: 'input',
      message: 'Enter usage information',
      name: 'Usage',
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
      type: 'checkbox',
      message: 'Choose your license',
      name: 'License',
      choices: [
        new inquirer.Separator(' Licenses '),
        {
          name: 'Apache License v2.0',
        },
        {
          name: 'GNU General Public License v3.0',
        },
        {
          name: 'MIT License',
        },
        ],
          validate: function (answer) {
          if (answer.length < 1) {
              return 'You must choose at a license';
            }
            return true;
        },
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
    { //table of Contents section that has links to corresonding section of README
      type: 'list',
      message: 'Table of content',
      name: 'Tests',
    },  
  ])
  
  .then((response) => {
    //1st step is to create variable and with template literals, paste initial html
    var htmlString = `<!DOCTYPE html> 
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Portfolio</title>
    </head>
    <body>
        <div class='container'>
        <h1>${response.nameAnswer}</h1>
        <h2>${response.location}</h2>
        <h2>${response.bio}</h2>
        
        </div>
    </body>
    </html>`


    fs.writeFile('index.html', htmlString, err => {
      console.log(err)
    }) //remember 3 arguments: name of the file you're creating(html) 2: 
    // console.log(response)  //the value does not need quotes
  }
  
      
      
  );