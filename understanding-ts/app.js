var person = {
    name: 'Leandro',
    age: 38,
    hobbies: ['Guitar', 'Games'],
    role: [2, 'author']
};
// person.role.push('admin'); // push works on Tuples
// person.role[1] = 10; // Type 'number' is not assignable to type 'string'
// person.role = [0, 'admin', 'user'] // Source has 3 element(s) but target allows only 2
var favouriteActivities;
favouriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
