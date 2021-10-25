const exec = require('node-async-exec');
const ora = require('ora');
const { gray } = require('chalk');
const path = require("path");
const ncp = require("ncp").ncp;

module.exports = async (projectTemplate) => {
    const spinner = ora(`generating client-side code.....  ${gray(`(this will take few minutes)`)}\n`).start();
    
    if (projectTemplate) {
        try {
            await exec({
                path: `${process.cwd()}`,
                cmd: templateRecognizer(projectTemplate)[0]
            })
            
            if (templateRecognizer(projectTemplate)[1]) {
                spinner.succeed('created react app')
            }
            else {
                spinner.fail("no such template")
            }
        } catch (err) {
            spinner.fail('unable to create a react app')
            throw err;
        }
    } else {
        try {
            let thePath = __dirname;
            let folder = "../templates/ejs-template";
            let newFolder = "client";

            await ncp(path.join(thePath, folder), path.join(process.cwd(), newFolder));
            spinner.succeed(`generated client-side code`);
        }
        catch (err) {
            spinner.fail(`fail to generate the client-side code`)
            throw err;
        }
    }
}

const templateRecognizer = (projectTemplate) => {
    if (projectTemplate === "--react") {
        return ["npx create-react-app client", 1]
    }
    else {
        return ["mkdir client", 0]
    }
}