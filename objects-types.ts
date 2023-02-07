//  const person: {
//    name: string;
//    age: number;
//    hobbies: string[];
//    role: [number, string];
//  } = {
//    name: 'Ben',
//    age: 30
//    hobbies: ['Sports', 'Cooking'],
//    role: [2, 'author'] 
//  }


enum Role {ADMIN = 5 , READ_ONLY_USER, AUTHOR};

const person = {
  name: 'Ben',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

// const ADMIN = 0;
// const READ_ONLY_USER = 1;
// const AUTHOR = 2;

 //person.role.push('admin');
 //person.role[1] = 10; 
 //person.role = [0, 'admin', 'user'];

 let favoriteActivities: string[];
 favoriteActivities = ['Sports'];

 console.log(person.name);

 for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
 // console.log(hobby.map()); Gives ERROR !!!! No map on stirng only on arrays //
 }

 if (person.role === Role.AUTHOR) {
  console.log('is Author');
}