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
    return `Hi, I am ${this.getName()}, a student in grade ${this.grade}.`;
  }
}