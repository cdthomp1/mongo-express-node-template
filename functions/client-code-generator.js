const exec = require('node-async-exec');
const ora = require('ora');
const { gray } = require('chalk');

module.exports = async () => {
    const spinner = ora(`generating client-side react code.....  ${gray(`(this will take few minutes)`)}\n`).start();
    try {
        await exec({
            path: `${process.cwd()}`,
            cmd: `npx create-react-app client`
        })
        spinner.succeed('created react app')
    } catch (err) {
        return spinner.fail('unable to create a react app')
    }
}