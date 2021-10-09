const ora = require('ora');
const path = require("path");
const ncp = require("ncp").ncp;

module.exports = async () => {
    ncp.limit = 0;

    const spinner = ora(`generating server-side code.....\n`).start();

    try {
        let thePath = __dirname;
        let folder = "../templates/node-mongo-template";
        let newFolder = "server";

        await ncp(path.join(thePath, folder), path.join(process.cwd(), newFolder));
        spinner.succeed(`generated server-side code`);
    }
    catch (err) {
        spinner.fail(`fail to generate the server-side code`)
        throw err;
    }
}