const CreateLicense = require("./license");


class Markdown {
    constructor (data) {
    const license = new CreateLicense(data.license, data.name);
    this.readme = 
`# ${data.title}

${license.shield}

## Description
${data.description}

1. [Installation](#1-installation)
2. [Usage](#2-usage)
3. [Contributors](#3-Contributors)
4. [License](#4-license)
5. [Questions](#5-questions)


## 1 Installation
${data.installation}

## 2 Usage
${data.usage}

## 3 License 
${license.summary}

## 4 Contributors
${data.contribution}

## 5 Questions 
- Github Profile: [${data.githubName}](${data.githubURL})
- [Send an email to ${data.email}](mailto:${data.email})
- [File an issue](${data.githubURL}/${data.title}/issues)
`
    
}
}
module.exports = Markdown;