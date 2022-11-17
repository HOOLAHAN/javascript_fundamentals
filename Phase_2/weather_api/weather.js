// file: weather.js

const WeatherClient = require("./weatherClient");

class Weather {

  constructor(client) {
    this.client = client;
    this.result;
  }

  fetch(city) {
    this.client.fetchWeatherData(city, (response) => {
      this.result = response 
    });
  }

  getWeatherData() {
    return this.result;
  }

};

module.exports = Weather;

// In node:

// const WeatherClient = require("./weatherClient");
// const Weather = require('./weather');
// const client = new WeatherClient();
// const weather = new Weather(client);
// weather.fetch('Bristol');
// weather.getWeatherData();