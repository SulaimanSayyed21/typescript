## Extending classes

Extend the `Person` class by creating a new class called `Student`. Include:

- An additional private property: `grade` (string).
- A constructor that calls the parent class and initializes `grade`.
- A public method `study()` that returns: `I am studying in grade [grade].`
- Override the `introduce()` method to include: `Hi, I am [name], a student in grade [grade].`
- Make sure that class student is exported so that it can be used in other files.

### Example

```ts
import { Person } from '../exercise-01/person';

export class Student extends Person {
  private grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age); // Call the parent class constructor
    this.grade = grade;
  }

  public study(): string {
    return `I am studying in grade ${this.grade}.`;
  }

  public introduce(): string {
    return `Hi, I am ${this.name}, a student in grade ${this.grade}.`;
  }
}
```

### Use This class in main.ts

```ts
import { Student } from './student';
//Example usage: Student class
const student = new Student('Alice', 15, '10th');
console.log(student.introduce()); // Output: Hi, I am Alice, a student in grade 10th.
console.log(student.study()); // Output: I am studying in grade 10th.
```

### Erros to avoid

- If there is an error, investigate the error message and try to fix it.
- Discuss what is the error
- For example , in the followign code of student.ts file, there is a an error. Can you find it?

```ts
  public introduce(): string {
    return `Hi, I am ${this.name}, a student in grade ${this.grade}.`;
  }

```

### How to Access the parent class properties in the child class

- Private properties of the parent class are not accessible in the child class or sub classes.
- To access the private properties of the parent class, you can use the getter and setter methods.
- For example, in the following code, the `name` property of the parent class is accessed using the getter method `getName()`.

```ts
public introduce(): string {
    return `Hi, I am ${this.getName()}, a student in grade ${this.grade}.`;
  }
```

- Where will you define the getter and setter methods?

```txt
The getter for name is defined in the Person class because name is a private property of Person.

```

### How to access the parent class methods in the child class

```ts
// this.getName() in the Student class calls the getName() method from the Person class.

public introduce(): string {
    return `Hi, I am ${this.getName()}, a student in grade ${this.grade}.`;
}


```

### what is a constructor

```txt

A constructor is a special method in a class that is automatically called when you create a new instance of that class. Its main purpose is to initialize the properties of the class with specific values.

For examaple:

When you create an instance of a subclass, the constructor of the subclass is called. But before you can use any properties or methods that belong to the superclass, you need to call the superclass's constructor first. This is done with keyword super().

```

### How to access the parent class constructor

```ts

//The super keyword is used inside the child class's constructor to call the parent class's constructor and pass any required arguments.

constructor(name: string, age: number, grade: string) {
    super(name, age); // Calls the Person class constructor
    this.grade = grade;

}

// The super keyword makes sure that the Person constructor initializes the name and age properties correctly. Without calling super, the child class cannot be instantiated properly.

```
