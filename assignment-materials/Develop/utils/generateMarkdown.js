// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}   

  ## Description
  ${data.description}\n

  ## Table of Contents
  * [Installation](#Install)
  * [Usage](#Usage Instructions)
  * [Contribution](#Contribution Guidelines)
  * [Test Instructions](#Test Instructions)
  * [License](#License)\n

  ## Installation
  ${data.install}\n

  ## Usage Instructions
  ${data.usage}\n

  ## Contribution Guidelines
  ${data.contributing}\n

  ## Test Instructions
  ${data.tests}\n

  ## License
  ${data.choices}\n

  ## Contact:
  * Github Username: ${data.Username}
  * Email: ${data.email}\n
`;
}

module.exports = generateMarkdown;
