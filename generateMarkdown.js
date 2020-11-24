function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ''
}

function renderLicenseLink(license) {
    if (license !== "None") {
        return (
            `* [License](#license)`
        )
    }
    return ''
}

function renderLicenseSection(license) {
    if (license !== "None") {
        return (
            `## License
  This project is licensed under the ${license} license.`
        )
    }
    return ''
}

function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description

  ${data.description}

## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}

## Installation

  To install necessary dependencies, run the following command:
\`\`\`

  ${data.Installation}

\`\`\`
## Usage

${data.Usage}
${renderLicenseSection(data.license)}
\`\`\`

## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  `;
}
module.exports = generateMarkdown;