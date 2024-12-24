
export class Car {
    //Properties
    public brand: string;
    protected model: string;
    private year: number;
    

    //constructor
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year  = year;
      }
    
    //Public method  
    public getCarDetails(): string {
        return `This car is ${this.brand} ${this.model} made in ${this.year}.`;
      }

    

}