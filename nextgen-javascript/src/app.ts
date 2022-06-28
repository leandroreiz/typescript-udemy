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

// Classes

console.log('---- CLASSES ----');

class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'd2'; can't assign readonly props
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(`Number of employees: ${this.employees.length}`);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Leandro');
accounting.addEmployee('Chelem');
accounting.addEmployee('Nina');

accounting.describe();
accounting.printEmployeeInformation();
