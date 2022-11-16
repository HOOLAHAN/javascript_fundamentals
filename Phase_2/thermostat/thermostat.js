// file: thermostat

class Thermostat {

  constructor(){
    this.temperature = 20;
    this.psm = true ;
  }

  up = () => {
    if (this.temperature < 25 && this.psm === true) {
      return this.temperature ++ ;
    } else if (this.temperature < 32 && this.psm === false) {
      return this.temperature ++ ;
    } else { 
      return this.temperature ; 
    }
  }

  down = () => {
    if (this.temperature > 10) {
      return this.temperature -- ;
    } else {
      return this.temperature;
    }
  }

  getTemperature = () => {
    return this.temperature;
  }

  setPowerSavingMode = (set_value) => {
    this.psm = set_value
    if (this.psm === false) {
      return false ;
    } else {
      return true ;
    }
  }

  reset = () => {
    this.temperature = 20;
    return this.temperature;
  }

  currentUsage = () => {
    if (this.temperature < 18) {
      return "low-usage" ;
    } else if (this.temperature > 18 && this.temperature <= 25) {
      return "medium-usage" ;
    } else {
      return "high-usage" ;
    }
  }

}

module.exports = Thermostat;