const person = {
  name: 'Leandro',
  age: 38,
  hobbies: ['Guitar', 'Games'],
};

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
