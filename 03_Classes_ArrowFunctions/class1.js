class Vehicle {
    constructor(wheels) {
       this.wheels = wheels;
    }
    toString() {
       return '(' + this.wheels + ')';
    }
 }
 
 class Car extends Vehicle {
    constructor(color) {
       super(4);
       this.color = color;
    }
    toString() {
       return super.toString() + ' colored: ' + this.color;
    }
 }
 
 let car = new Car('blue');
 car.toString();
 
 console.log(car instanceof Car);
 console.log(car instanceof Vehicle);

 //-------------Arrow functions part--------------//
 //Normal Function:
 function sum1(a, b) {
    return a + b;
}
let result = sum1(1, 2);
console.log(result);

//Arrow Function:
const sum2 = (a, b) => {
    return a + b;
}
let result1 = sum2(1, 2);
console.log(result1);

