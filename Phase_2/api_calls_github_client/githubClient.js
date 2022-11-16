// file: githubClient

got = require('got'); 

class githubClient {

  fetchRepositoryData = (repo, callback) => {
  got(`https://api.github.com/repos/${repo}`)
    .then((response) => {
      callback(JSON.parse(response.body));
    });
  }
}

module.exports = githubClient;