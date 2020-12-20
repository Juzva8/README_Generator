// function to generate markdown for README
function generateMarkdown(data) {
  let badge = "";
  let licenseDesc = "";
  if (data.license === "MIT"){
    badge = "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)"
    licenseDesc = `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (data.license === "AGPL"){
    badge = "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)"
    licenseDesc = "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
  } else{
    badge = "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)"
    licenseDesc = "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
  }
  return `# ${data.title}
  ${badge}
  # Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)
## Description
* ${data.desc}
## Installation
* ${data.install}
## Usage
* ${data.usage}
## Contributing
* ${data.contrib}
## Tests
* ${data.tests}
## License
* ${licenseDesc}
## Questions
* Contact me at:
  * [My GitHub Profile](https://github.com/${data.user})
  * My Email ${data.email}
`;
}

module.exports = {generateMarkdown};
