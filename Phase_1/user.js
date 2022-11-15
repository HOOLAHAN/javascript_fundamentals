// file: user.js

class User {

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  
  getIntroduction() {
    return `Hi, my name is ${this.name}`
  }
}

module.exports = User;

// const users = [
//   new User('Uma'),
//   new User('Josh'),
//   new User('Ollie')
// ];