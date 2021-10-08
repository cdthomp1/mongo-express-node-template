const welcome = require('cli-welcome');
const { version, author, description } = require('../package.json');


module.exports = () => {
    welcome({
        title: `create-mern-app`,
        tagLine: `by ${author.name}`,
        description: `${description}`,
        bgColor: `#00ff00`,
        color: `#000000`,
        bold: true,
        clear: true,
        version: `${version}`
    });
}