// file: weatherClient.js

const apiKey = require('./apiKey'); //apiKey 
// apiKey file hidden by .gitignore

const got = require('got');

class WeatherClient {
  
  constructor() {}

  fetchWeatherData = (city, callback) => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    got(apiUrl)
      .then((response) => {
      callback(JSON.parse(response.body));
    });
  }
}

module.exports = WeatherClient;

// Implement the class WeatherClient that fetches the current weather for a given city using got. 
// It should also accept a callback function, which will get called once the data has been received and parsed to an object:


// In node: 

// const WeatherClient = require('./weatherClient');
// const client = new WeatherClient();
// client.fetchWeatherData('London', (weatherData) => {
//   console.log(weatherData);
// });
