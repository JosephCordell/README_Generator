const inquirer = require("inquirer")
const Markdown = require("./utils/markdown.js");
const fs = require("fs");


const questions = [{
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your github username?',
      },
    {
        type: 'input',
        name: 'githubURL',
        message: 'What is your github url?',
      },
      {
          type: 'input',
          name: 'email',
          message: 'What is your email?',
        },
      {
          type: 'editor',
          name: 'description',
          message: 'How would you describe your project, What does it do?',
        },
      {
        type: 'editor',
        name: 'installation',
        message: 'How would you install this project',
      },
    {
        type: 'editor',
        name: 'usage',
        message: 'What are the steps to use this program/project?',
      },
    {
        type: 'list',
        name: 'license',
        message: 'Does your program use a license ',
        choices: [
            "Apache License 2.0",
            "Boost Software License 1.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU General Public License v3.0",
            "ISC License",
            "MIT License",
            "Mozilla Public License 2.0",
            "Unlicense"],
        default: "Unlicense"
      },
    {
        type: 'editor',
        name: 'contribution',
        message: 'What are the github usernames for the contributors?',
      }
    ]


const generateReadME = (data) => {
    const generateMarkdown = new Markdown(data)

    // console.log(generateMarkdown.readme)

    fs.writeFileSync('README.md', generateMarkdown.readme)
    console.log("README Generated!")
}



inquirer.prompt(questions).then(response => generateReadME(response));