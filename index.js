#!/usr/bin/env node
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const axios = require('axios');

const word =  (argv.word || argv._[0]).trim()
axios.defaults.baseURL = "https://dictionary-api11.herokuapp.com";

axios.get(`/api/dictionary/${word}`)
  .then(function (response) {
    // handle success
    console.log(response.data.desc);
  })
  .catch(function (error) {
    // handle error
    console.log(`Sorry... '${word}' is not found`);
})

