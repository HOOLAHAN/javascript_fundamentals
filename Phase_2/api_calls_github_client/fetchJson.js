// Create a function fetchJson (in fetchJson.js) which accepts one URL, and one callback function as arguments.

// It should send an HTTP request using got to the URL, and calls the given function with the received response's data. This data should be parsed from JSON into a plain JavaScript object.

// file: fetchJason.js

const got = require('got'); 

const fetchJson = (url, callback) => {
  got(url)
    .then((response) => {
      const responseObject = JSON.parse(response.body);
      console.log(responseObject);
    });
}

module.exports = fetchJson;
