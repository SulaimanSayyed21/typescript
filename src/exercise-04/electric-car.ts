import {Car} from './car';

export class ElectricCar extends Car {
  // property specific to ElectricCar
  private batteryCapacity: number;
  
  // Constructor intialise properties of ElectricCar, including properties from the parent class
  constructor(brand: string, model: string, year: number, batteryCapacity: number) {
    super(brand, model, year); // Calling the parent class constructor
    this.batteryCapacity = batteryCapacity;
  }
  //public method
  public charge(): string {
    return `charging ${this.batteryCapacity} kwh battery.`;
    
  } 
  // Optionally, you can override the getCarDetails method to include batteryCapacity information
  public getCarDetails(): string {
    return `${super.getCarDetails()} and charging is ${this.batteryCapacity} kwh batter`;

  }
 
}
