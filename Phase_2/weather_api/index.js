const apiKey = require('./apiKey');
// apiKey file hidden by .gitignore file

// https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=apiKey

const got = require('got');
const city = 'Barcelona';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body);
  // console.log(weatherData);
  console.log(weatherData.main.temp);
  console.log(weatherData.weather[0].main);
});

console.log('Requesting weather data');
