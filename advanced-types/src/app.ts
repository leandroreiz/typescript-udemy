// Intersection types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Leandro',
  privileges: ['create-server'],
  startDate: new Date(),
};

// Another example
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Function overloads
function add(a: number, b: number): number;
function add(a: number, b: string): string;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  // Type Guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

let result = add(1, 's');
result.split(' ');

// Optional chain
const fetchedUserData = {
  id: 'id1',
  name: 'Leandro',
  job: { title: 'Front-end Developer', company: 'Glofox' },
};

// Javascript way of checking if job was fecthed...
// console.log(fetchedUserData.job && fetchedUserData.job.title);

// Optional chain in Typescript
console.log(fetchedUserData?.job?.title);

// Nullish coalescing
const userInput = undefined; // null or ''
const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

// Type checking for intersection/custom types/interfaces
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);

  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);

// Type checking for classes
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log(`Cargo weight ${amount}kg`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // use instanceof
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated unions
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
    default:
      break;
  }

  console.log(`Moving at speed: ${speed}km/h`);
}

moveAnimal({ type: 'bird', flyingSpeed: 30 });

// Type casting

// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')
// );

// const userInputElement = document.getElementById(
//   'user-input'
// ) as HTMLInputElement;

// userInputElement.value = 'Hi there!';

const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}

// Index types
interface ErrorContainer {
  // {email: 'Not a valid email!', username: 'Must start with a character!'}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a character!',
};
