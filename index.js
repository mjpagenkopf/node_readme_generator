const fs = require("fs");

const inquirer = require("inquirer");

console.log(inquirer);
console.log(fs);
inquirer //
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'nameAnswer',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Tell me about yourself',
      name: 'bio',
    },
    {
        type: 'input',
        message: 'please provide LinkedIn URL',
        name: 'URL',
      },
      {
        type: 'input',
        message: 'please provide Github URL',
        name: 'URL2',
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