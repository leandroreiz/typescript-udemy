"use strict";
const hobbies = ['Guitar', 'Games'];
const activeHobbies = ['Scuba Dive'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    firstName: 'Leandro',
    age: 38,
};
const copiedPerson = Object.assign({}, person);
copiedPerson.firstName = 'Chelem';
console.log(copiedPerson);
console.log(person);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const result = add(5, 10, 2, 3.7);
console.log(result);
const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;
console.log(hobby1, hobby2, ...remainingHobbies);
const { firstName: userName, age } = person;
console.log(userName, age);
console.log('---- CLASSES ----');
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(`Number of employees: ${this.employees.length}`);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.addEmployee('Leandro');
accounting.addEmployee('Chelem');
accounting.addEmployee('Nina');
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map