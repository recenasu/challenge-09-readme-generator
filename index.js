// Define variable to import the "fs" module to enable interaction with the file system
const fs = require('fs');

// Define variable to include the "inquirer" npm module
const inquirer = require('inquirer');

// Key/value hash contains the user's answers in each prompt. The 'key' is the 'name' property. The 'value' is the string value of entered by the user.
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a description of the application:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions for the application:',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Enter usage information for the application:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter project contribution guidelines:',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Enter test instructions for the application:',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Choose a license for the application:',
            name: 'license',
            choices: ['A', 'B', 'C', 'D'],
        },
        {
            type: 'input',
            message: 'Enter your GitHub user name:',
            name: 'gitHubUserName',
        },
        {
            type: 'input',
            message: 'Enter your email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter instructions for contacting you:',
            name: 'contact',
        },
    ])
    .then((response) => {
        
        // Define variable for adding content and formatting to README file.
        let contentsReadMe = "# Title: " + response.title + "\n\n## Description\n" + response.description + "\n\n## Table of Contents\n\n[Installation](#installation)<br>[Usage](#usage)<br>[Contributing](#contributing)<br>[Tests](#tests)  [License](#license)<br>[Questions](#questions)\n\n### Installation\n\n" + response.install + "\n\n### Usage\n\n" + response.usage + "\n\n### Contributing\n\n" + response.contribution + "\n\n### Tests\n\n" + response.test + "\n\n### License\n\n" + response.license + "\n\n### Questions\n\n" + "> * GitHub Username: " + response.gitHubUserName + "\n\n" + "> * GitHub Profile: https://github.com/" + response.gitHubUserName + "\n\n> * Email: " + response.email + "\n\n> * Contact Instructions: " + response.contact + "\n\n";

        // Generate Readme file
        fs.appendFile('Generated_README.md', contentsReadMe, (err) => err ? console.error(err + "title.") : console.log('Project README created successfully!'));
    }
    );