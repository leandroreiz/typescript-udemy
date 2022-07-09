// Generic types
// const names: Array<string | number> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This promise is resolved!');
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

// Custom generics
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: 'Leandro' }, { age: 38 }));
// { name: 'Leandro', age: 38 }

const mergeObj = merge(
  { name: 'Leandro', hobbies: ['guitar', 'games'] },
  { age: 38 }
);
console.log(mergeObj);
console.log(mergeObj.name);

// Constraints
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';

  if (element.length === 1) {
    descriptionText = 'Got ' + element.length + ' element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }

  return [element, descriptionText];
}

console.log(countAndDescribe(['guitar', 'playing']));
console.log(countAndDescribe('Hi there!'));

// keyof
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Leandro' }, 'name');

// Generic classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Foo');
textStorage.addItem('Bar');
textStorage.addItem('Baz');
textStorage.removeItem('Bar');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
const mixedStorage = new DataStorage<number | string | boolean>();

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: 'Leandro' });
// objectStorage.addItem({ name: 'Chelem' });
// objectStorage.removeItem({ name: 'Leandro' });
// console.log(objectStorage.getItems());

// Generic Utility Types
interface CourseGoal {
  title: string;
  description: string;
  completeUtil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUtil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();
