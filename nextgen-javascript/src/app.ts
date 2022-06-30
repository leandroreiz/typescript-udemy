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

// -----------------------------------------------------------
// Classes
// -----------------------------------------------------------

console.log('---- CLASSES ----');

abstract class Department {
  static fiscalYear = 2022;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return {
      name,
    };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = 'd2'; can't assign readonly props
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(`Number of employees: ${this.employees.length}`);
    console.log(this.employees);
  }
}

const employee1 = Department.createEmployee('Wallace');
console.log(employee1, Department.fiscalYear);

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe() {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error('No report found!');
  }

  set mostRecentReport(report: string) {
    if (!report) throw new Error('Please pass in a valid value!');
    this.addReport(report);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
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

  addEmployee(employee: string): void {
    if (employee === 'Leandro') {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports, this.employees);
  }
}

const it = new ITDepartment('d1', ['Leandro']);
// const accounting = new AccountingDepartment('d2', []);
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
