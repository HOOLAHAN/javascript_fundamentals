// const getNumberSign = (a) => {
// if (a < 0) {
//   return 'negative'
// } else if (a === 0) {
//   return 'zero'
// } else {
//   return 'positive'
// }
// }

// console.log(getNumberSign(3));

// console.log(getNumberSign(0));

// console.log(getNumberSign(-1));

// module.exports = getNumberSign;

// const isValidLength = (phoneNumber) => {
//   const validLength = 11;
//   if (phoneNumber.length === validLength) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // module.exports = isValidLength;

// console.log(isValidLength('00'));

// console.log(isValidLength('00112233445'));

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

console.log(fizzBuzz(3));

console.log(fizzBuzz(5));

console.log(fizzBuzz(8));

console.log(fizzBuzz(15));

console.log(fizzBuzz(18));

console.log(fizzBuzz(20));
