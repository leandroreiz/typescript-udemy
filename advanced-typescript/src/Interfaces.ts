// Interfaces
// type AddFn = (a: number, b: number) => number; // this is more common
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Gretable extends Named {
  greet(phrase: string): void;
}

class Person implements Gretable {
  name?: string;
  age = 38;

  constructor(n?: string) {
    if (n) this.name = n;
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(`${phrase} ${this.name}!`);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Gretable;

user1 = new Person();
// user1.name = 'Chelem'; // error

user1.greet('Hi there! My name is');
console.log(user1);
