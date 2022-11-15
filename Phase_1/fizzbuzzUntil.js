const fizzbuzzUntil = (i) => {
  for (let a = 1; a <= i; a++) {
    console.log(fizzBuzz(a));
  }
};

const fizzBuzz = (a) => {
  if (a % 3 === 0 && a % 5 === 0) {
    return "FizzBuzz";
  } else if (a % 3 === 0) {
    return "Fizz";
  } else if (a % 5 === 0) {
    return "Buzz";
  } else {
    return a;
  }
};

fizzbuzzUntil(100);
