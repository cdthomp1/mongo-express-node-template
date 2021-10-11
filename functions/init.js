const exec = require('node-async-exec');
const ora = require('ora');

module.exports = async (projectName) => {
    const spinner = ora('creating project folder...').start();

    try {
        await exec({
            path: process.cwd(),
            cmd: `mkdir ${projectName}`
        })
        spinner.succeed(`created folder ${projectName}`)
        await gitInitializer(projectName);

    }
    catch (err) {
        spinner.fail(`fail to create ${projectName}`);
        throw err;
    }
}

const gitInitializer = async (projectName) => {
    try {
        const spinner = ora('initializing git...').start();
        await exec({
            path: `${process.cwd()}/${projectName}`,
            cmd: `git init`
        })
        spinner.succeed('initialized empty git repository')
    } catch (err) {
        spinner.fail(`fail to initialized git`);
        throw err;
    }
}