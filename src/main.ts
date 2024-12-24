// import { Person } from "./exercise-01/person";

// const Alice = new Person('Alice', 80 , "23/09/1978");

// //const Bob = new Person('Bob', 25 , "25/07/1998");
// //const sulaiman = new Person("Sulaiman", 19 , "21/03/2005");
// console.log(Alice.introduce());
// //console.log(Bob.introduce());
// //console.log(sulaiman.introduce());

// // printing the whole object
// //console.log(Alice)

// //accessing private properties
// // console.log(Alice.name)  // error since its a private property and only visible in class

// //accessing public property
// //console.log(Alice.dob) // Allowed since its a public property



import { Person } from './exercise-01/person';
import { Student } from './exercise-03/student';
import { Car } from './exercise-04/car'
import { ElectricCar } from './exercise-04/electric-car'

//exercise-01
const Alice = new Person('Alice', 20 );
const Bob = new Person('Bob', 25);
console.log(Alice.introduce());
console.log(Bob.introduce());


//exercise-03
const alicy = new Student('Alice', 20, '10th');
const bobby = new Student('Bob', 25, '10th');
console.log(alicy.introduce()); // Output: Hi, I am Alice, a student in grade 10th.
console.log(alicy.study()); 
console.log(bobby.introduce()); 
console.log(bobby.study());


//exercise-04
const prius = new Car('toyota', 'prius', 2009);
const renault = new ElectricCar('renault', 'etron', 2024, 20000);
const tesla = new ElectricCar('tesla', 'emodel', 2009, 19000);

console.log(prius.getCarDetails());
console.log(renault.charge());
console.log(renault.getCarDetails());
console.log(tesla.getCarDetails())
