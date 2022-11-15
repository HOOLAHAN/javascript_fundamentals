// const person = {
//   name: 'Maxine',
//   age: 32,
//   address: 'London, E1 123'
// };

// // both ways can be used to access an object's property:
// console.log(person.name);
// console.log(person['name']);

// const bankAccount = {
//   // simple value attributes
//   accountNumber: 376782676,
//   accountSortCode: 999999,

//   // we can attach functions too (so they act like 'methods'):
//   getBalance: () => {
//     return 100;
//   }
// };

// console.log(bankAccount.getBalance());

// console.log(bankAccount.accountNumber);

const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

console.log(person.address['city']);
console.log(person.address.city);

console.log(person.hobbies[1]);

const cohort = {
  name: 'Oct2022',
  id: 1337,
  students: ['Adon', 'Tom', 'Joe', 'Iain']
}

const printing = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort.`)
}

printing(cohort);