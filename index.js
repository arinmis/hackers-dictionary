#!/usr/bin/env node
import yargs from 'yargs/yargs'
import {hideBin} from 'yargs/helpers'
import axios from 'axios';
import chalk from 'chalk';

axios.defaults.baseURL = "https://dictionary-api11.herokuapp.com";

const argv = yargs(hideBin(process.argv)).argv

const success = chalk.hex('#66b2b2'); // Orange color
const error = chalk.hex('#FF3131'); // Orange color

const word =  argv.word || argv._[0]

axios.get(`/api/dictionary/${word}`)
  .then(function (response) {
    // handle success
    console.log(success(response.data.desc));
  })
  .catch(function (e) {
    // handle error
    console.log(error(`Sorry... '${word}' is not found`));
})
