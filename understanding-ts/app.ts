const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Leandro',
  age: 38,
  hobbies: ['Guitar', 'Games'], // array
  role: [2, 'author'], // tuple
};

// person.role.push('admin'); // push works on Tuples
// person.role[1] = 10; // Type 'number' is not assignable to type 'string'
// person.role = [0, 'admin', 'user'] // Source has 3 element(s) but target allows only 2

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
