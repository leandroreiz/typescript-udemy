"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    console.log('Logger Factory');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log('Template Factory');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log('Rendering template...');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h2').textContent = this.name;
                }
            }
        };
    };
}
let PersonDecorators = class PersonDecorators {
    constructor() {
        this.name = 'Leandro Reis';
        console.log('Creating person object...');
    }
};
PersonDecorators = __decorate([
    Logger('Logging in'),
    WithTemplate('<h2>My Person Object</h2>', 'app')
], PersonDecorators);
const pers = new PersonDecorators();
console.log(pers);
function Log(target, propName) {
    console.log('Property decorator!');
    console.log(target, propName);
}
function Log2(target, name, propDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(propDescriptor);
}
function Log3(target, name, propDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(propDescriptor);
}
function Log4(target, name, position) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0)
            this._price = val;
        else
            throw new Error('Invalid price - should be positive!');
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const p1 = new Product('Fender Stratocaster FF', 790.9);
const p2 = new Product('Ibanez Prestige', 2100.0);
//# sourceMappingURL=app.js.map