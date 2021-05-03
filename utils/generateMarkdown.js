function renderLicenseBadge(license) {
  var licenseMarkdown;

  switch(license) {
    case "Apache 2.0 License":
      licenseMarkdown = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "Boost Software License 1.0":
      licenseMarkdown = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "BSD 3-Clause License":
      licenseMarkdown = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "BSD 2-Clause License":
      licenseMarkdown = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "CC0":
      licenseMarkdown = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Attribution 4.0 International":
      licenseMarkdown = "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
      break;
    case "Attribution-ShareAlike 4.0 International":
      licenseMarkdown = "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
      break;
    case "Attribution-NonCommercial 4.0 International":
      licenseMarkdown = "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)";
      break;
    case "Attribution-NoDerivates 4.0 International":
      licenseMarkdown = "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)";
      break;
    case "Attribution-NonCommmercial-ShareAlike 4.0 International":
      licenseMarkdown = "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)";
      break;
    case "Attribution-NonCommercial-NoDerivatives 4.0 International":
      licenseMarkdown = "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)";
      break;
    case "Eclipse Public License 1.0":
      licenseMarkdown = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GNU GPL v3":
      licenseMarkdown = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "GNU GPL v2":
      licenseMarkdown = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "GNU AGPL v3":
      licenseMarkdown = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "GNU LGPL v3":
      licenseMarkdown = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "GNU FDL v1.3":
      licenseMarkdown = "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";
      break;
    case "IBM Public License Version 1.0":
      licenseMarkdown = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;
    case "ISC License (ISC)":
      licenseMarkdown = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case "The MIT License":
      licenseMarkdown = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      licenseMarkdown = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Open Data Commons Attribution":
      licenseMarkdown = "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
      break;
    case "Open Database License (ODbL)":
      licenseMarkdown = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
      break;
    case "Public Domain Dedication and License (PDDL)":
      licenseMarkdown = "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
      break;
    case "The Perl License":
      licenseMarkdown = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case "The Artistic License 2.0":
      licenseMarkdown = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case "SIL Open Font License 1.1":
      licenseMarkdown = "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
      break;
    case "The Unlicense":
      licenseMarkdown = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    case "WTFPL":
      licenseMarkdown = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
      break;
    case "Zlib":
      licenseMarkdown = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
      break;
    default:
      licenseMarkdown = "";  
  }
  return licenseMarkdown;
}

function renderLicenseLink(license) {
  var licenseLink;

  switch(license) {
    case "Apache 2.0 License":
      licenseLink = "https://opensource.org/licenses/Apache-2.0"
      break;
    case "Boost Software License 1.0":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "BSD 3-Clause License":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "BSD 2-Clause License":
      licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
      break;
    case "CC0":
      licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/";
      break;
    case "Attribution 4.0 International":
      licenseLink = "https://creativecommons.org/licenses/by/4.0/";
      break;
    case "Attribution-ShareAlike 4.0 International":
      licenseLink = "https://creativecommons.org/licenses/by-sa/4.0/";
      break;
    case "Attribution-NonCommercial 4.0 International":
      licenseLink = "https://creativecommons.org/licenses/by-nc/4.0/";
      break;
    case "Attribution-NoDerivates 4.0 International":
      licenseLink = "https://creativecommons.org/licenses/by-nd/4.0/";
      break;
    case "Attribution-NonCommmercial-ShareAlike 4.0 International":
      licenseLink = "https://creativecommons.org/licenses/by-nc-sa/4.0/";
      break;
    case "Attribution-NonCommercial-NoDerivatives 4.0 International":
      licenseLink = "https://creativecommons.org/licenses/by-nc-nd/4.0/";
      break;
    case "Eclipse Public License 1.0":
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
      break;
    case "GNU GPL v3":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "GNU GPL v2":
      licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;
    case "GNU AGPL v3":
      licenseLink = "https://www.gnu.org/licenses/agpl-3.0";
      break;
    case "GNU LGPL v3":
      licenseLink = "https://www.gnu.org/licenses/lgpl-3.0";
      break;
    case "GNU FDL v1.3":
      licenseLink = "https://www.gnu.org/licenses/fdl-1.3";
      break;
    case "IBM Public License Version 1.0":
      licenseLink = "https://opensource.org/licenses/IPL-1.0";
      break;
    case "ISC License (ISC)":
      licenseLink = "https://opensource.org/licenses/ISC";
      break;
    case "The MIT License":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "Mozilla Public License 2.0":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "Open Data Commons Attribution":
      licenseLink = "https://opendatacommons.org/licenses/by/";
      break;
    case "Open Database License (ODbL)":
      licenseLink = "https://opendatacommons.org/licenses/odbl/";
      break;
    case "Public Domain Dedication and License (PDDL)":
      licenseLink = "https://opendatacommons.org/licenses/pddl/";
      break;
    case "The Perl License":
      licenseLink = "https://opensource.org/licenses/Artistic-2.0";
      break;
    case "The Artistic License 2.0":
      licenseLink = "https://opensource.org/licenses/Artistic-2.0";
      break;
    case "SIL Open Font License 1.1":
      licenseLink = "https://opensource.org/licenses/OFL-1.1";
      break;
    case "The Unlicense":
      licenseLink = "http://unlicense.org/";
      break;
    case "WTFPL":
      licenseLink = "http://www.wtfpl.net/about/";
      break;
    case "Zlib":
      licenseLink = "https://opensource.org/licenses/Zlib";
      break;
    default:
      licenseLink = "";  
  }

  return licenseLink;
}

function generateMarkdown(data) {

  var { projectName, 
    description, 
    installCommand, 
    usage, 
    testCommand, 
    contribution, 
    license, 
    githubName, 
    email} = data
  
  return `
# ${projectName}
${renderLicenseBadge(license)}
## Description
${description}
## Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
## Installation
${installCommand}
## Usage
${usage}
## Tests
${testCommand}
## Contributing
${contribution}
## License
This project uses [${license}](${renderLicenseLink(license)})
## Questions
Github contact: [${githubName}](https://www.github.com/${githubName})
Email: [${email}](mailto:${email})`;

}

module.exports = generateMarkdown;
