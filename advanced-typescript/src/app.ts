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

const pers = new PersonDecorators();
console.log(pers);

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
