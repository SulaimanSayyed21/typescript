### Prompt 2: Implementing Inheritance

**Instruction:**
Extend the `Person` class to create a new class called `Student`. Include:

- An additional private property: `grade` (string).
- A constructor that calls the parent class and initializes `grade`.
- A public method `study()` that returns: `I am studying in grade [grade].`
- Override the `introduce()` method to include: `Hi, I am [name], a student in grade [grade].`

--- 

### Writing a Student class

- Write a sclass `Student` which is similar to a Person calls except that it has an additional property `grade` (string).

> Before you write the `Student` class, answer the following questions:

1. Do you agree that we need to reuse the code instead of re writing it again ? if yes, how can we reuse the code?

2. Do you think that the Studen class must have a CTROR ? 

3. Can a class be created without a constructor ? if yes, how can we create a class without a constructor ?

3. Is CTROR a method or a function ?

4. Can a class have more than one CTROR ?

5. Can a class have more than one method ?

6. Do you think the `Student` class should have a constructor that takes three parameters: `name` (string), `age` (number), and `grade` (string)? Why or why not?

7. Do you think that the Person class can come handy when creating the Student class? Why or why not?

8. Can we extend the Person class to create the Student class? If yes, how can we do that? What is the syntax for extending a class?

9. What would you achieve if you extend the Person class to create the Student class?



- Do not write a new Student class but extend the Person class to create a new class called Student. 
  See if you can write a Student class that extends the Person class.
- When you extends a super class from a sub class, you can access the properties and methods of the super class in the sub class, is it ture ? 
- What is inheritence in OOP ?


---