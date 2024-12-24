// export class Person {
//     // Creating 2 private properties
//     private name: string;
//     private age: number;
//     public readonly dob: string;
  
//     // Constructor
//     constructor(name: string, age: number, dob: string) {
//       this.name = name;
//       this.age = age;
//       this.dob = dob;
//     }
  
//     // Public method
//     public introduce(): string {
//       return `Hi, I am ${this.name} and I am ${this.age} years old, born on ${this.dob}`;
//     }
  
//   }

  // Example usage
// const sulaiman = new Person("Sulaiman", 19);
// console.log(sulaiman.introduce()); // Output: Hi, I am Sulaiman and I am 19 years old.
  
// const Alice = new Person("Alice", 40);
// const Bob = new Person('Bob', 25);
// console.log(Alice.introduce());
// console.log(Bob.introduce());


//To run: 
//Compile the TypeScript File. TypeScript files need to be compiled into JavaScript before running. Use the tsc command to compile the file:
//command: tsc person.ts or npx tsc person.ts
//This generates a person.js file in the same directory.
//Run the JavaScript File
//code: node person.js


//exercise-03 student

export class Person {
  // Private properties
  private name: string;
  private age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  //getter and setter
  public getName(): string {
    return `${this.name}`
  }
    

  // Public method
  public introduce(): string {
    return `Hi, I am ${this.name} and I am ${this.age} years old.`;
  }
}


