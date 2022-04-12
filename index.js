const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = () => {

return inquirer.prompt([

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the title of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter the description of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the intended usage of this project?',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Who are the collaborators to this project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter examples for running tests (Optional)',
      },

      {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Would you like others to contribute to this project?',
        default: true
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'Please enter guidelines for how others can contribute.',
        when: ({ confirmContribute }) => confirmContribute
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your github username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contact',
        message: 'Add any additional instructions on contacting you for questions.',
        when: ({ emailInput }) => emailInput
      }
    ])

};

function writeToFile(fileName, data) {

    return new Promise((resolve, reject) => {

        fs.writeFile(fileName, data, err => {

            if (err) {
                reject (err);
                return;
            }

            resolve({
                ok: true,
                message: 'File has been written.'
            });
        })
    })
}

function init() {

    questions()
    .then(ReadMeData => {
        return generateMarkdown(ReadMeData);
    })
    .then(ReadMeDoc => {
        return writeToFile('./dist/README.md', ReadMeDoc);
    })
    .catch(err => {
        console.log(err);
    });
}

init();