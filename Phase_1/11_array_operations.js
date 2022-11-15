// const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

// // 1. Using a predicate function and `filter` to get only names shorter than 3 letters.
// const isShorterThanThree = (name) => {
//   if (name.length < 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

// // 2. Create a new array of all names uppercased by applying
// // the `getUppercased` function to all elements in the `names` array.

// const getUppercased = (name) => {
//   return name.toUpperCase();
// }

// const uppercasedNames = names.map(getUppercased);

// ============================================================================

// const checkLength = (phoneNumber) => {
//   if (phoneNumber.length <= 10) {
//     return true;
//   } else {
//   return false;
//   }
// };

// const filterLongNumbers = (phoneNumbers) => {
//   return phoneNumbers.filter(checkLength)
// };

// const numbers = [
//   '1763687364',
//   '4763687363',
//   '7867867862',
//   'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
// ];

// console.log(filterLongNumbers(numbers));
// console.log(filterLongNumbers([]));
// console.log(filterLongNumbers(['4763687363', '7867867862']));

// ============================================================================

// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// const generateMessages = (namesList) => {
//   return namesList.map((name) => {
//     return `Hi ${name}! 50% off our best candies for you today!`;
//     });
//   };


// console.log(generateMessages(names));

// ============================================================================


// An array of objects!
const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (namesList) => {
  return namesList.map((item) => {
    return `Hi ${item.name}! ${item.discount}% off our best candies for you today!`;
    });
  };

console.log(generateMessages(namesAndDiscounts));