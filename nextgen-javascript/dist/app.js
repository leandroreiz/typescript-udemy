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
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(`Number of employees: ${this.employees.length}`);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Leandro']);
const accounting = new AccountingDepartment('d2', ['Report 1', 'Report 2']);
it.addEmployee('Nina');
accounting.addEmployee('Chelem');
it.describe();
accounting.describe();
accounting.addReport('Report 3 added');
it.printEmployeeInformation();
accounting.printReports();
console.log(it);
console.log(accounting);
//# sourceMappingURL=app.js.map