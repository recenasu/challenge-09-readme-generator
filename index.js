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

const epl10License = {
    name: "Eclipse Public License 1.0",
    icon: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
}

const gplv3License = {
    name: "GNU GPL v3",
    icon: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
}

const gplv2License = {
    name: "GNU GPL v2",
    icon: "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
}

const agplv3License = {
    name: "GNU AGPL v3",
    icon: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
}

const lgplv3License = {
    name: "GNU LGPL v3",
    icon: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
}

const fdlv13License = {
    name: "GNU FDL v1.3",
    icon: "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)",
}

const hippo21License = {
    name: "Hippocratic 2.1",
    icon: "(https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)",
}

const hippo30License = {
    name: "Hippocratic 3.0",
    icon: "(https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)",
}

const ibmPub10License = {
    name: "IBM Public Version 1.0",
    icon: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
}

const iscLicense = {
    name: "ISC",
    icon: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
}

const mitLicense = {
    name: "MIT",
    icon: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
}

const mozilla20License = {
    name: "Mozilla",
    icon: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
}

const odcattbyLicense = {
    name: "Open Data Commons Attribution (BY)",
    icon: "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
}

const odcODblLicense = {
    name: "Open Data Commons Open Database (ODbl)",
    icon: "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
}

const odcPDDLLicense = {
    name: "Open Data Commons Public Domain Dedication and License (PDDL)",
    icon: "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)",
}

const perlLicense = {
    name: "Perl",
    icon: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
}

const art20License = {
    name: "Artistic 2.0",
    icon: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
}

const silOpenFont11License = {
    name: "SIL Open Font 1.1",
    icon: "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
}

const unLicense = {
    name: "Unlicense",
    icon: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
}

const zlibLicense = {
    name: "zlib/libpng",
    icon: "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
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
                epl10License.name,
                gplv3License.name,
                gplv2License.name,
                agplv3License.name,
                lgplv3License.name,
                fdlv13License.name,
                hippo21License.name,
                hippo30License.name,
                ibmPub10License.name,
                iscLicense.name,
                mitLicense.name,
                mozilla20License.name,
                odcattbyLicense.name,
                odcODblLicense.name,
                odcPDDLLicense.name,
                perlLicense.name,
                art20License.name,
                silOpenFont11License.name,
                unLicense.name,
                zlibLicense.name
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
            case epl10License.name:
                icon = epl10License.icon;
                license = epl10License.name;
                break;
            case gplv3License.name:
                icon = gplv3License.icon;
                license = gplv3License.name;
                break;
            case gplv2License.name:
                icon = gplv2License.icon;
                license = gplv2License.name;
                break;
            case agplv3License.name:
                icon = agplv3License.icon;
                license = agplv3License.name;
                break;
            case lgplv3License.name:
                icon = lgplv3License.icon;
                license = lgplv3License.name;
                break;
            case fdlv13License.name:
                icon = fdlv13License.icon;
                license = fdlv13License.name;
                break;
            case hippo21License.name:
                icon = hippo21License.icon;
                license = hippo21License.name;
                break;
            case hippo30License.name:
                icon = hippo30License.icon;
                license = hippo30License.name;
                break;
            case ibmPub10License.name:
                icon = ibmPub10License.icon;
                license = ibmPub10License.name;
                break;
            case iscLicense.name:
                icon = iscLicense.icon;
                license = iscLicense.name;
                break;
            case mitLicense.name:
                icon = mitLicense.icon;
                license = mitLicense.name;
                break;
            case mozilla20License.name:
                icon = mozilla20License.icon;
                license = mozilla20License.name;
                break;
            case odcattbyLicense.name:
                icon = odcattbyLicense.icon;
                license = odcattbyLicense.name;
                break;
            case odcODblLicense.name:
                icon = odcODblLicense.icon;
                license = odcODblLicense.name;
                break;
            case odcPDDLLicense.name:
                icon = odcPDDLLicense.icon;
                license = odcPDDLLicense.name;
                break;
            case perlLicense.name:
                icon = perlLicense.icon;
                license = perlLicense.name;
                break;
            case art20License.name:
                icon = art20License.icon;
                license = art20License.name;
                break;
            case silOpenFont11License.name:
                icon = silOpenFont11License.icon;
                license = silOpenFont11License.name;
                break;
            case unLicense.name:
                icon = unLicense.icon;
                license = unLicense.name;
                break;
            case zlibLicense.name:
                icon = zlibLicense.icon;
                license = zlibLicense.name;
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