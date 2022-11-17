// file: github.test.js

const Github = require("./github");
const GithubClient = require("./githubClient");

describe ("github", () => {
  it('constructs', () => {
    let client = new GithubClient();
    let hub = new Github(client);
    expect(hub).toBeInstanceOf(Github);
  });

  it ('gets the repo data fetched by the GithubClient class', (done) => {
    const mockedClient = {
      fetchRepositoryData: (repo, callback) => {
        callback({
          name: 'sinatra/sinatra',
          description: 'Some fake description'
        });
      }
    };

    const github = new Github(mockedClient);
    github.fetch('sinarta/sinatra');

    expect(github.getRepoData()).toEqual({
      name: 'sinatra/sinatra',
      description: 'Some fake description'
    });
    done();
  });
});