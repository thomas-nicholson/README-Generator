// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the name of your project?",
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'How would you describe your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How can your project be installed?',
        name: 'installCommand',
    },
    {
        type: 'input',
        message: 'How can your project be used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can your project be tested?',
        name: 'testCommand',
    },
    {
        type: 'input',
        message: 'How to contribute to your project?',
        name: 'contribution',
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        choices: [
            "Apache 2.0 License",
            "Boost Software License 1.0",
            "BSD 3-Clause License",
            "BSD 2-Clause License",
            "CC0",
            "Attribution 4.0 International",
            "Attribution-ShareAlike 4.0 International",
            "Attribution-NonCommercial 4.0 International",
            "Attribution-NoDerivates 4.0 International",
            "Attribution-NonCommmercial-ShareAlike 4.0 International",
            "Attribution-NonCommercial-NoDerivatives 4.0 International",
            "Eclipse Public License 1.0",
            "GNU GPL v3",
            "GNU GPL v2",
            "GNU AGPL v3",
            "GNU LGPL v3",
            "GNU FDL v1.3",
            "IBM Public License Version 1.0",
            "ISC License (ISC)",
            "The MIT License",
            "Mozilla Public License 2.0",
            "Open Data Commons Attribution",
            "Open Database License (ODbL)",
            "Public Domain Dedication and License (PDDL)",
            "The Perl License",
            "The Artistic License 2.0",
            "SIL Open Font License 1.1",
            "The Unlicense",
            "WTFPL",
            "Zlib"
        ],
        name: 'License',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'githubName',
    },
    {
        type: 'input',
        message: 'What is your email address?',
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
