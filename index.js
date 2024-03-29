#!/usr/bin/env node
import yargs from 'yargs/yargs'
import {hideBin} from 'yargs/helpers'
import axios from 'axios';
import chalk from 'chalk';


const argv = yargs(hideBin(process.argv)).argv

/* TODO: seperate app configs */ 
axios.defaults.baseURL = "https://dictionary-api11.herokuapp.com";
const success = chalk.hex('#66b2b2'); // Orange color
const error = chalk.hex('#FF3131'); // Orange color
const lineLimit = 80;
const indent = "   ";

if (argv._.length != 1 && !argv.word)  {
  console.log(error("Usage: mean --word example"))
  process.exit()
}

const word =  argv.word || argv._[0] || argv.word

console.log(chalk.white.bold(`-- ${word.charAt(0).toUpperCase() + word.slice(1)}\n`))

axios.get(`/api/dictionary/${word}`)
  .then(function (response) {
    // handle success
    const result = `${success(response.data.desc)}`
    const output = addNewLine(result, indent , lineLimit)
    console.log(output);
  })
  .catch(function (e) {
    // handle error
    const result = `${error(`Sorry... '${word}' is not found`)}`
    const output = addNewLine(result, indent , lineLimit)
    console.log(output)
  })



function addNewLine(str, indent, limit) { 
  let result = "";
  for (let i = 0; i < str.length; i += limit) { 
    result += indent + str.substring(i, i + limit) +  "\n";
  }
  return result;
}
