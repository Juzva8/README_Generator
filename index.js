const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path');
const generateMarkdown = require("./generateMarkdown")

const questions = [{
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Your product description!',
        default: 'This project is to make your life better!',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Steps required to install project and how to get the development environment running:',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Instructions and examples for use:',
    },

    {
        type: 'list',
        message: "Choose a license for your project.",
        name: 'license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0']
    },

    {
        type: 'input',
        name: 'github',
        message: 'what is your github?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions).then(function(inquirerResponses) {
        writeToFile("README.md", generateMarkdown({...inquirerResponses }))
    })
}
init();