// file: candy.test.js

const Candy = require("./candy");

describe ('getName', () => {
  it('returns the name from Candy', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toEqual('Mars')
  })
});

describe ('getPrice', () => {
  it('returns the price from Candy', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toEqual(4.99)
  })
});

