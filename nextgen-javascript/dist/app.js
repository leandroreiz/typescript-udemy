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
    static createEmployee(name) {
        return {
            name,
        };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(`Number of employees: ${this.employees.length}`);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2022;
const employee1 = Department.createEmployee('Wallace');
console.log(employee1, Department.fiscalYear);
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department - ID: ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error('No report found!');
    }
    set mostRecentReport(report) {
        if (!report)
            throw new Error('Please pass in a valid value!');
        this.addReport(report);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log(`Accounting Department - ID: ${this.id}`);
    }
    addEmployee(employee) {
        if (employee === 'Leandro') {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports, this.employees);
    }
}
const it = new ITDepartment('d1', ['Leandro']);
const accounting = AccountingDepartment.getInstance();
console.log(it);
it.addEmployee('Nina');
it.describe();
it.printEmployeeInformation();
accounting.addEmployee('Chelem');
accounting.addEmployee('Leandro');
accounting.addReport('Report added');
accounting.mostRecentReport = 'Report set';
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.describe();
//# sourceMappingURL=app.js.map