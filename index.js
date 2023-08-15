// Define variable to import the "fs" module to enable interaction with the file system
const fs = require('fs');

// Define variable to include the "inquirer" npm module
const inquirer = require('inquirer');

// Define global variables for the selected license and icon.
var icon = "";
var license = "";

// Define license objects
const apache20License = {
    name: "Apache 2.0",
    icon: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
}

const boostLicense = {
    name: "Boost 1.0",
    icon: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
}

const bsd3License = {
    name: "BSD 3-Clause",
    icon: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
}

const bsd2License = {
    name: "BSD 2-Clause",
    icon: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
}

const cc0License = {
    name: "Creative Commons CC0 1.0",
    icon: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
}

const ccby40License = {
    name: "Creative Commons Attribution 4.0 International",
    icon: "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)",
}

const ccbysa40License = {
    name: "Creative Commons Attribution-ShareAlike 4.0 International",
    icon: "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)",
}

const ccbync40License = {
    name: "Creative Commons Attribution-NonCommercial 4.0 International",
    icon: "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)",
}

const ccbynd40License = {
    name: "Creative Commons Attribution-NoDerivatives 4.0 International",
    icon: "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)",
}

const ccbyncsa40License = {
    name: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
    icon: "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)",
}

const ccbyncnd40License = {
    name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International",
    icon: "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)",
}

const mitLicense = {
    name: "MIT",
    icon: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
}

const mozilla20License = {
    name: "Mozilla",
    icon: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
}

const odblLicense = {
    name: "ODbl",
    icon: "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
}



// Inquirer prompts. The 'key' is the 'name' property. The 'value' is the string value entered by the user.
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
            choices: [
                apache20License.name,
                boostLicense.name,
                bsd3License.name,
                bsd2License.name,
                cc0License.name,
                ccby40License.name,
                ccbysa40License.name,
                ccbync40License.name,
                ccbynd40License.name,
                ccbyncsa40License.name,
                ccbyncnd40License.name,
                mitLicense.name,
                mozilla20License.name,
                odblLicense.name
            ],
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

        // Set the "icon" and "license" variables based on selection.
        switch (response.license) {
            case apache20License.name:
                icon = apache20License.icon;
                license = apache20License.name;
                break;
            case boostLicense.name:
                icon = boostLicense.icon;
                license = boostLicense.name;
                break;
            case bsd3License.name:
                icon = bsd3License.icon;
                license = bsd3License.name;
                break;
            case bsd2License.name:
                icon = bsd2License.icon;
                license = bsd2License.name;
                break;
            case cc0License.name:
                icon = cc0License.icon;
                license = cc0License.name;
                break;
            case ccby40License.name:
                icon = ccby40License.icon;
                license = ccby40License.name;
                break;
            case ccbysa40License.name:
                icon = ccbysa40License.icon;
                license = ccbysa40License.name;
                break;
            case ccbync40License.name:
                icon = ccbync40License.icon;
                license = ccbync40License.name;
                break;
            case ccbynd40License.name:
                icon = ccbynd40License.icon;
                license = ccbynd40License.name;
                break;
            case ccbyncsa40License.name:
                icon = ccbyncsa40License.icon;
                license = ccbyncsa40License.name;
                break;
            case ccbyncnd40License.name:
                icon = ccbyncnd40License.icon;
                license = ccbyncnd40License.name;
                break;
            case mitLicense.name:
                icon = mitLicense.icon;
                license = mitLicense.name;
                break;
            case mozilla20License.name:
                icon = mozilla20License.icon;
                license = mozilla20License.name;
                break;
            case odblLicense.name:
                icon = odblLicense.icon;
                license = odblLicense.name;
                break;
            default:
                icon = "NA";
                license = "NA";
        }

        // Define variable for adding content and formatting README file.
        let contentsReadMe = `# Title: ${response.title} ${icon}\n\n## Description\n ${response.description}\n\n## Table of Contents\n\n[Installation](#installation)<br>[Usage](#usage)<br>[Contributing](#contributing)<br>[Tests](#tests)  [License](#license)<br>[Questions](#questions)\n\n### Installation\n\n${response.install}\n\n### Usage\n\n${response.usage}\n\n### Contributing\n\n${response.contribution}\n\n### Tests\n\n${response.test}\n\n### License\n\nThis application is covered under the ${license} license. ${icon}\n\n### Questions\n\n> * GitHub Username: ${response.gitHubUserName}\n\n> * GitHub Profile: https://github.com/${response.gitHubUserName}\n\n> * Email: ${response.email}\n\n> * Contact Instructions: ${response.contact}\n\n`;

        // Generate Readme file
        fs.appendFile('Generated_README.md', contentsReadMe, (err) => err ? console.error(err) : console.log('README for project ' + response.title + ' created successfully!'));
    }
    );