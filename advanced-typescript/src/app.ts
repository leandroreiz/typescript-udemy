// Decorators
function Logger(logString: string) {
  console.log('Logger Factory');

  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('Template Factory');

  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();

        console.log('Rendering template...');

        const hookEl = document.getElementById(hookId);
        // const p = new originalConstructor();

        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h2')!.textContent = this.name;
        }
      }
    };
  };
}

@Logger('Logging in')
@WithTemplate('<h2>My Person Object</h2>', 'app')
class PersonDecorators {
  name = 'Leandro Reis';

  constructor() {
    console.log('Creating person object...');
  }
}

// const pers = new PersonDecorators();
// console.log(pers);

// ---

function Log(target: any, propName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propName);
}

function Log2(
  target: any,
  name: string | Symbol,
  propDescriptor: PropertyDescriptor
) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(propDescriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  propDescriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(propDescriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) this._price = val;
    else throw new Error('Invalid price - should be positive!');
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Fender Stratocaster FF', 790.9);
const p2 = new Product('Ibanez Prestige', 2100.0);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const objDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return objDescriptor;
}

class Printer {
  message = 'This works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.querySelector('button');
button?.addEventListener('click', printer.showMessage);

// ---

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      'required',
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      'positive',
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const form = document.querySelector('form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }

  console.log(createdCourse);
});
