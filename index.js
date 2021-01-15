const fs = require('fs');
const inquirer = require('inquirer');
const gen = require('./utils/generateMarkdown.js')

const questions = [{
    type: "input",
    message: "Project name? ",
    name: "title",
    default: 'Project'
}, {
    type: "input",
    message: "Description of the project? ",
    name: "desc",
    default: 'This project is to make your life better!'
}, {
    type: "input",
    message: "Installation instructions? ",
    name: "install"
}, {
    type: "input",
    message: "Usage information? ",
    name: "usage"
}, {
    type: "input",
    message: "Contribution guidelines? ",
    name: "contrib",
    default: "When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change. Please note we have a code of conduct, please follow it in all your interactions with the project."
}, {
    type: "input",
    message: "Tests? ",
    name: "tests"
}, {
    type: "list",
    message: "License? ",
    name: "license",
    choices: ["MIT", "AGPL", "GNU"]
}, {
    type: "input",
    message: "GitHub username?",
    name: "user",
    default: 'Juzva8'
}, {
    type: "input",
    message: "Email address?",
    name: "email",
    default: 'laurynas.juzva@gmail.com'
}];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'));
}


function init() {
    inquirer.prompt(questions).then((response) => {
        let text = gen.generateMarkdown(response);
        try {
            writeToFile("README.md", text)
        } catch (error) {
            console.error(error);
        }
    })

}


init();