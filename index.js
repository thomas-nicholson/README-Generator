// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Name?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation Command?',
        name: 'installCommand',
    },
    {
        type: 'input',
        message: 'Usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'How to contribute?',
        name: 'contribution',
    },
    {
        type: 'list',
        message: 'License Type?',
        choices: [
            "GPL",
            "The Unlicense",
            "Apache"
        ],
        name: 'License',
    },
    {
        type: 'input',
        message: 'Github Username?',
        name: 'githubName',
    },
    {
        type: 'input',
        message: 'Email Address?',
        name: 'email',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
        })
        .catch(error => {
            console.log(error);   
        });
}

// Function call to initialize app
init();
