const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path');
const generateMarkdown = require("./generateMarkdown")
    // array of questions for user


const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is your name of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Your product description!',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Steps required to install project and how to get the development environment running:',
    },
    {
        type: 'Usage',
        name: 'Usage',
        message: 'Instructions and examples for use:',
    },

    {
        type: 'input',
        name: 'github',
        message: 'what is your github?',
    },


    {
        type: 'checkbox',
        message: 'What License you used?',
        name: 'License',
        choices: ['GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0']
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(inquirerResponses) {
        writeToFile("README.md", generateMarkdown({...inquirerResponses }))
    })
}

// function call to initialize program
init();



GNU GPLv3