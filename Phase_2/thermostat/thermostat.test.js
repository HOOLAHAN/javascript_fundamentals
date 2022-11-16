// file: thermostat.test

const Thermostat = require("./thermostat")

describe('Thermostat', () => {
  it('is initially set to 20 degrees', () => {
    let thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20)
  })

  it('is increased by one degree each time the up function is called', () => {
    let thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22)
  })

  it('is decreased by one degree each time the down function is called', () => {
    let thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(21)
  })

  it('the temperature cannot decrease below 10', () => {
    let thermostat = new Thermostat();
    for (let i = 0 ; i < 15 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10)
  })

  it('initially powerSavingMode is on (true) so max temperature is limited to 25 degrees', () => {
    let thermostat = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25)
  })

  it('when powerSavingMode is off (false) the max temperature is no longer limited to 25 degrees', () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(30)
  })

  it('the temperature returns to 20 when the reset function is called', () => {
    let thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20)
  })

  it('when the currentUsage method is called it will return a string confirming a category', () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 3 ; i++) {
      thermostat.down();
    }
    expect(thermostat.currentUsage()).toEqual("low-usage")
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(27)
    expect(thermostat.currentUsage()).toEqual("high-usage")
    for (let i = 0 ; i < 3 ; i++) {
      thermostat.down();
    }
    expect(thermostat.currentUsage()).toEqual("medium-usage")
  })

})