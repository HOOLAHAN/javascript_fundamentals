// file: github.js

const GithubClient = require("./githubClient");

class Github {

  constructor(client) {
    this.client = client;
    this.result;
  }

  fetch = (repo) => {
    this.client.fetchRepositoryData(repo, (response) => {
      this.result = response 
    });
  }

  getRepoData = () => {
  return this.result;
  }

};

module.exports = Github;

// Test-drive a class Github which has the following behaviour:
// const client = new GithubClient();

// // We inject the instance of `GithubClient`:
// const github = new Github(client);

// // This method will delegate to `GithubClient.fetchRepositoryData()`
// github.fetch('sinatra/sinatra');

// // And after a few moments, this should return a JS object with the repo information.
// github.getRepoData();


// const client = new GithubClient();
// const github = new Github(client);
// github.fetch('sinatra/sinatra');
// github.getRepoData();