// Spread operator

const hobbies = ['Guitar', 'Games'];
const activeHobbies = ['Scuba Dive'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  firstName: 'Leandro',
  age: 38,
};

const copiedPerson = { ...person };
copiedPerson.firstName = 'Chelem';

console.log(copiedPerson);
console.log(person);

// Rest parameters

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const result = add(5, 10, 2, 3.7);
console.log(result);

// Array & Object Destructuring

const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;
console.log(hobby1, hobby2, ...remainingHobbies);

const { firstName: userName, age } = person;
console.log(userName, age);
