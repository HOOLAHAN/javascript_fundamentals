// file: fizzBuzz.test.js

const fizzBuzz = require("./fizzbuzz");

describe ('fizzbuzz', () => {
  it('returns fizz when the argument is divisible by 3', () => {
    expect(fizzBuzz(12)).toBe('Fizz')
  });
  it('returns buzz when the argument is divisible by 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz')
  });
  it('returns fizzbuzz when the argument is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  });
});