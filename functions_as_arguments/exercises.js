// Exercise 1. Edit this function
const doubleCall = (callback) => {
   callback();
   callback();
};

// Exercise 2. Edit this function
const obnoxiousFn = (callback) => {
  console.log("EXECUTING CALLBACK!")
  return callback()
};


// Exercise 3. Edit this function
const currentTime = (callback) => {
  const time = new Date().toLocaleTimeString()
  callback(time)
};

// Bonus Exercise. Edit this function
const myMap = (array, callback) => {
  let new_array = []
  array.forEach(element => {
     new_array.push(callback(element))
  });
  return new_array;
};

module.exports = {
  doubleCall,
  obnoxiousFn,
  currentTime,
  myMap,
};
