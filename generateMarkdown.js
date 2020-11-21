function generateMarkdown(data) {
    return `## ${data.title}

    ## Description 
    *Your project description:* 

    ## ${data.Description}
   
    ## Installation
    *Steps required to install project running:*

    ## ${data.Installation}

    ## Usage 
    *Instructions how to use:*

    ## ${data.Usage}
    
    ## License

    ## ${data.license}


    ## Questions?
    *For any questions, please contact me with the information below:*
    ## ${data.github}
    ## ${data.email}
    
    `
}
module.exports = generateMarkdown