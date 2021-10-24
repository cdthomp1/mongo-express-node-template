// #!/usr/bin/env node
const header = require("./utils/header");
const cli = require('./utils/cli');

(() => {
    header();
    
    if (process.argv.length == 3) {
        const project = process.argv.slice(2);
        const projectName = project[0];
        
        cli(projectName);
    }
    else if (process.argv.length == 4) {
        const project = process.argv.slice(2);
        const projectName = project[0];
        const projectTemplate = project[1];
        
        cli(projectName, projectTemplate);
    }
})();
