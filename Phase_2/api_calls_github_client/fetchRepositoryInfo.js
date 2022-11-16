// file: fetchRepositoryInfo.js 

const got = require('got'); 

const fetchRepositoryInfo = (repo, callback) => {
  got(`https://api.github.com/repos/${repo}`)
    .then((response) => {
      callback(JSON.parse(response.body));
    });
}

module.exports = fetchRepositoryInfo;
  

// =========================================================================================
// Create a function fetchRepositoryInfo (in fetchRepositoryInfo.js) which fetches repository data from Github's API calls the given callback with the data it receives from the API (as a JS object):

// // In node

// const fetchRepositoryInfo = require('./fetchRepositoryInfo');

// fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
//   console.log(receivedResponse);
// });
