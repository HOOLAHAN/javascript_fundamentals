// file: githubRequest.js

// Load the `got` function.
// const got = require('got'); 
// Create a "handler" callback function.
// const handleReceivedResponse = (response) => {
//   const responseObject = JSON.parse(response.body);
//   console.log(responseObject);
// } 
// const url = 'https://api.github.com/repos/sinatra/sinatra';
// Call `got` and provide the handler callback function. This will get called by `got` when the response is received.
// got(url).then(handleReceivedResponse);

// const stringValue = '{ "name": "John" }';
// const objectValue = JSON.parse(stringValue);

// // console.log(objectValue); // { name: 'John' }

// // We can access properties like a regular JS object
// console.log(objectValue.name);

// ======================= ^ long version 

const got = require('got'); 

got('https://api.github.com/repos/sinatra/sinatra')
  .then((response) => {
    const responseObject = JSON.parse(response.body);
    console.log(responseObject);
  });

// ======================= ^ short version
