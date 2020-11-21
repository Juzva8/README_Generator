function generateMarkdown(data) {
    return `

    ## README.md Generator: Node.js and ES6+
    ## ${data.Description}
    ## ${data.title}
    ## ${data.Installation}
    ## ${data.Usage}
    ## ${data.License}
    ## Questions?
    For any questions, please contact me with the information below:
    ## ${data.github}
    ## ${data.email}
    
    `
}
module.exports = generateMarkdown