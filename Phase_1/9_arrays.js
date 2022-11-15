// const numbers = [1, 2, 3, 4];
// const newNumbers = numbers.concat(5);

// numbers.forEach((number) => {
//   console.log(number);
// })

// const peers = ['Iain', 'Tom', 'Joe', 'Adon'];
// console.log(peers.length);
// console.log(peers[1]);

// const newPeers = peers.concat('Leo');
// console.log(newPeers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let total = 0
// numbers.forEach((number) => {
//   total += number
// }
// )

// console.log(total)

const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array;
  } else {
    return array.concat(number);
  }
};

console.log(addToBatch([1, 2, 3, 4], 7));
