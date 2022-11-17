// file: weather.test.js

const Weather = require("./weather");
const WeatherClient = require("./weatherClient");

describe ("Weather", () => {
  it('constructs', () => {
    let client = new WeatherClient();
    let weather = new Weather(client);
    expect(weather).toBeInstanceOf(Weather);
  });

  it ('gets the weather data fetched by the WeatherClient class', (done) => {
    const mockedClient = {
      fetchWeatherData: (city, callback) => {
        callback({
          main: 'Some fake clouds',
          description: 'Some fake description'
        });
      }
    };

    const weather = new Weather(mockedClient);
    weather.fetch('Bristol');

    expect(weather.getWeatherData()).toEqual({
      main: 'Some fake clouds',
      description: 'Some fake description'
    });
    done();
  });
});