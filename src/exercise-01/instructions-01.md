## Exercise 1 - TypeScript Class (1.)

Write a TypeScript class to represent a `Person`. The class should include:

- A constructor that takes two parameters: `name` (string) and `age` (number).
- Two private properties: `name` and `age`.
- A public method `introduce()` that returns a string: `Hi, I am [name] and I am [age] years old.`

### Discussion (1.1)

- What is a class in TypeScript?

```txt

A class is a template to create objects. It defines properties (data) and methods (actions) for those objects.

```

- What is the purpose of a constructor in a class?

```txt
A constructor is the starting point for the object. It sets the initial values (like name and age) when you create the object.
```

- What is the difference between public and private properties in a class?

```txt
Public: Anyone can see or change it.
Private: It’s hidden, and only the class itself can use or change it.

```

- What is the purpose of a method in a class?

```txt
A method is a function inside a class. It defines actions the object can do, like showing its details.
```

- What is the purpose of the `introduce()` method in the `Person` class?

```txt

It acceses the properties of the class

```

- What is the output of the `introduce()` method?

```txt
Hi, I am Sulaiman and I am 19 years old.
```

- How would you create an instance of the `Person` class?

```txt
By calling the class with the new operator

This: const sulaiman = new Person("Sulaiman", 19);
calling/invoke the introduce() method: console.log(sulaiman.introduce());

//const person = new Person("Sulaiman", 19);
//console.log(person.introduce());
```

- How would you access the `name` and `age` properties of a `Person` instance?

```txt
First we create an instance of a Person class and using that instance we access them using the dot operater. For e.g: 

// Create an instance of the Person class
const sulaiman = new Person("Sulaiman", 19);

//To access the name and age properties we will use the dot operator
console.log(sulaiman.name); 
console.log(sulaiman.age);  

The above method only applies to public properties and since name and age are private it will throw an error.
```

- How would you call the `introduce()` method of a `Person` instance?

```txt
By invoking the method upon(using) its instance. For e.g: jack is the instance here. The type of the variable is constant
const jack = new Person()
jack.introduce();

```

- What is the output of the `introduce()` method when called on a `Person` instance?

```txt
Hi, I am Sulaiman and I am 19 years old.
```

- What is the difference between a class and an instance of a class?

```txt
A class is a template while an instances (are created through the template/class) of a class is a specific object from the class

```

- Create a `Person` instance with the name "Bob" and age 50 Call the `introduce()` method and log the output.

```txt
const person = new Person("Bob", 50); // Create a person named Bob
console.log(person.introduce());     // Ask Bob to introduce himself

```

- What is the return type of the `introduce()` method and why is it needed?

```txt
string(written in single/double quote)
return `Hi, I am ${this.name} and I am ${this.age} years old.`
In typescript a type is always needed when you are passing or recieving an argument.Its type is always needed.
```

- What happens if you try to access the `name` and `age` properties directly from outside the class?

```txt
Since name and age are private, trying to access them directly from outside the class will cause an error.
```

- If you wanted to allow read-only access to the `name` and `age` properties, what would you change in the class definition?

```txt

```

---

### What is OOP ?
