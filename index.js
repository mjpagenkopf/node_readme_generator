const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

const generator = (markdown) => {
console.log(markdown);
return    `
    # 
    ${markdown.title}\n

    ## Description\n
    ${markdown.description}\n

    ## Install\n
    ${markdown.install}\n

    ## Usage Instructions\n
    ${markdown.usage}\n

    ## Contribution Guidelines\n
    ${markdown.contributing}\n

    ## Test Instructions\n
    ${markdown.tests}\n

    ## License\n
    ${markdown.choices}\n

    ## Username\n
    ${markdown.Username}\n

    ## Email\n
    ${markdown.email}\n

    ## table of contents \n
    ${markdown.table}`;
}

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
        //   new inquirer.Separator('License'),
        // {
        //   name: 
          'Apache License v2.0',
        // },
        // {
        //   name: 
          'GNU General Public License v3.0',
        // },
        // {
        //   name: 
          'MIT License',
        // },
        ],
        //   validate: function (answer) {
        //   if (answer.length < 1) {
        //       return 'You must choose at a license';
        //     }
        //     return true;
        // },
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
      type: 'input',
      message: 'Table of content',
      name: 'table',
    },  
  ])
// };
// generator()
//   .then(response => {
    //1st step is to create variable and with template literals
    .then((markdown) => {
        const readMeString = generator(markdown);
        
        fs.writeFile(path.resolve(__dirname, './generatedReadMe/README.md'), readMeString, (err) => 
    err ? console.error(err) : console.log('Success!')
  ); 
});

    // var choices = ''; 
    // const readMeString = (`

    // # 
    // ${response.title}\n

    // ## Description\n
    // ${response.description}\n

    // ## Install\n
    // ${response.install}\n

    // ## Usage Instructions\n
    // ${response.usage}\n

    // ## Contribution Guidelines\n
    // ${response.contributing}\n

    // ## Test Instructions\n
    // ${response.tests}\n

    // ## License\n
    // ${response.choices}\n

    // ## Username\n
    // ${response.Username}\n

    // ## Email\n
    // ${response.email}\n

    // ## table of contents \n
    // ${response.table}`)

//     fs.writeFile('README.md', readMeString, (err) => 
//     err ? console.error(err) : console.log('Success!')
//   ); 
//   });



  
      
// init()








// const generator = () => {
    // return  
//

     //remember 3 arguments: name of the file you're creating 2: what is being written 3: callback function
    // console.log(response)  //the value does not need quotes
//