// const uppercaseMessage = (message) => {
//   return message.toUpperCase();
// }

// // This function accepts as arguments a string message, and a function.
// // It then calls the given function to do its job.
// const transform = (message, transformFunction) => {
//   return transformFunction(message);
// }

// console.log(transform("hello", uppercaseMessage));

// const lowercaseMessage = (message) => {
//   return message.toLowerCase();
// }

// const transform = (message, transformFunction) => {
//   return transformFunction(message);
// }

// console.log(transform("WHY ARE YOU SHOUTING?", lowercaseMessage));

const notifyByEmail = (email) => {
  return `Email sent to ${email}`;
};
const notifyByText = (text) => {
  return `Text sent to ${text}`;
};

const notify = (inputInfo, contactFunction) => {
  return contactFunction(inputInfo);
};

console.log(notify("hello@makers.tech.test", notifyByEmail));

console.log(notify("+100000000000", notifyByText));
