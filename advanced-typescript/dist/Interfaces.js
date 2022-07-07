"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 38;
        if (n)
            this.name = n;
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} ${this.name}!`);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user1;
user1 = new Person();
user1.greet('Hi there! My name is');
console.log(user1);
//# sourceMappingURL=Interfaces.js.map