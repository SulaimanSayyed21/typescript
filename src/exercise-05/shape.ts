// Abstract class Shape
export abstract class Shape {
    // Abstract methods to be implemented by subclasses
    abstract area(): number;
    abstract perimeter(): number;
  
    // Concrete method
    describe(): string {
      return "This is a shape.";
    }
  }
  
  // Subclass Circle
  export class Circle extends Shape {
    private radius: number;
  
    constructor(radius: number) {
      super(); // Call the constructor of the abstract class
      this.radius = radius;
    }
  
    // Implement the area method
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  
    // Implement the perimeter method
    perimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Subclass Rectangle
  export class Rectangle extends Shape {
    private width: number;
    private height: number;
  
    constructor(width: number, height: number) {
      super(); // Call the constructor of the abstract class
      this.width = width;
      this.height = height;
    }
  
    // Implement the area method
    area(): number {
      return this.width * this.height;
    }
  
    // Implement the perimeter method
    perimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  