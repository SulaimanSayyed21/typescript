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
import { Circle, Rectangle } from './exercise-05/shape'; // Importing from shape.ts

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


//exercise-05


// Create a Circle instance with radius 5
const circle = new Circle(5);
console.log(circle.describe()); // Output: This is a shape.
console.log("Circle Area:", circle.area()); // Output: Circle Area: 78.53981633974483
console.log("Circle Perimeter:", circle.perimeter()); // Output: Circle Perimeter: 31.41592653589793

// Create a Rectangle instance with width 4 and height 7
const rectangle = new Rectangle(4, 7);
console.log(rectangle.describe()); // Output: This is a shape.
console.log("Rectangle Area:", rectangle.area()); // Output: Rectangle Area: 28
console.log("Rectangle Perimeter:", rectangle.perimeter()); // Output: Rectangle Perimeter: 22
