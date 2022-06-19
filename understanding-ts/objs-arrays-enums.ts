enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Leandro',
  age: 38,
  hobbies: ['Guitar', 'Games'],
  role: Role.ADMIN,
};

// person.role.push('admin'); // push works on Tuples
// person.role[1] = 10; // Type 'number' is not assignable to type 'string'
// person.role = [0, 'admin', 'user'] // Source has 3 element(s) but target allows only 2

let favouriteActivities: any[];
favouriteActivities = ['Sports', true, 10];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) console.log('Is admin');
