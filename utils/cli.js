const init = require('../functions/init');
const clientCodeGenerator = require('../functions/client-code-generator');
const serverCodeGenerator = require('../functions/server-code-generator');
const ora = require('ora');

module.exports = async (projectName, projectTemplate) => {
    projectTemplate = projectTemplate || "";
    
    if (projectTemplate.length) {
        console.log(`Creating Project ${projectName} using template ${projectTemplate}`);
    }
    else {
        console.log(`Creating Project ${projectName}`);
    }
    
    try {
        await init(projectName);
        await clientCodeGenerator(projectTemplate);
        await serverCodeGenerator();
        ora().start().succeed("created mern stack app")
    }
    catch (err) {
        return ora().start().fail(`unable to create the mern-stack app`);
    }
}