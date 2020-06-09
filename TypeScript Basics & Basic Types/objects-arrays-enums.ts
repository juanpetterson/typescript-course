// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple - fixed-length array
// } = {
//   name: 'Juan',
//   age: 27,
//   hobbies: ['Sports', 'Coding'],
//   role: [2, 'author'],
// };

// const ADMIN = 0;
// const AUTHOR = 1;
// const READ_ONLY = 2;

// enum Role {
//   ADMIN, // 0
//   AUTHOR, // 1
//   READ_ONLY, // 2
// }

// enum Role {
//   ADMIN = 5, // 5
//   AUTHOR, // 6
//   READ_ONLY, //7
// }

// the 3 ways are valid

enum Role {
  ADMIN = 'ADMIN',
  AUTHOR = 'AUTHOR',
  READ_ONLY = 'READ_ONLY',
}

const person = {
  name: 'Juan',
  age: 27,
  hobbies: ['Sports', 'Coding'],
  role: Role.READ_ONLY,
};

// person.role.push('admin'); // allowed, ts cant catch this error
// person.role[1] = 10; // not allowed

// person.role = [0, 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.READ_ONLY) {
  console.log('is read only');
}
