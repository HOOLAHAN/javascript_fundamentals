// file: githubClient

// Implement a class GithubClient (in githubClient.js) with a method fetchRepositoryData which:
// fetches repository data from Github's API.
// calls the given callback with the received data (after transforming the JSON into a JavaScript object).

// In node:

// const GithubClient = require('./githubClient');
// const client = new GithubClient();
// client.fetchRepositoryData('sinatra/sinatra', (repositoryData) => {
//   console.log(repositoryData);
// });


got = require('got'); 

class GithubClient {

  constructor() {}

  fetchRepositoryData = (repo, callback) => {
  got(`https://api.github.com/repos/${repo}`)
    .then((response) => {
      callback(JSON.parse(response.body));
    });
  }
}

module.exports = GithubClient;