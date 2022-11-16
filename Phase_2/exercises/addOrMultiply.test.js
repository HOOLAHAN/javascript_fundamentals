// file: addOrMultiply.test.js

const add = require('./addOrMultiply');
const multiply = require('./addOrMultiply');


describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4)
  });
});

describe('multiply', () => {
  it('multiplies 2 and 2', () => {
    expect(multiply(2, 2)).toBe(4)
  });
  it('multiplies 0 and 5', () => {
    expect(multiply(0, 5)).toBe(0)
  });
});
