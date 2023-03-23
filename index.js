#!/usr/bin/env node
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const word =  argv.word || argv._[0] 


