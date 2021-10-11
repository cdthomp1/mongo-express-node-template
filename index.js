#!/usr/bin/env node

const header = require("./utils/header");
const cli = require('./utils/cli');

(() => {
    header();
    const projectName = process.argv.slice(2);
    cli(projectName[0]);
})();
