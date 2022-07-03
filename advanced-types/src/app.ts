type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // Intersection types

const e1: ElevatedEmployee = {
  name: 'Leandro',
  privileges: ['create-server'],
  startDate: new Date(),
};

// Another example
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
