
const PI = 3.1416 // Once we declared a value for const it can not be change
//PI= 3;  will give compiler error
console.log("Printing constant");
console.log(PI);

//Number 
const age: number = 7;
const height: number=5.6
console.log("Printing Numbers");
console.log(age);
console.log(height);

//Boolean
const isZeroGreaterThanOne: boolean= false;
console.log("Printing Boolean");
console.log(isZeroGreaterThanOne);

// Array
const brand: string []= ['Chevrolet','Ford','General Motor']
const ages: number[]=[8,5,12,3,1];
console.log("Printing array")
console.log(brand);
console.log("Printing array index");
console.log(ages[0]);

// Any will allow to use anytype
let distance: any;
distance = '100km'
console.log("Printing type any")
console.log(distance);
distance=1000;
console.log(distance);
//Custom Type
type Animal ="Cheetah" | "Lion";
const animal: Animal ='Cheetah';
console.log("Printing Constom Type Animal")
console.log(animal);
//const animal:Animal='Turtle'; compiler does not allow Turtle is not part of animal;

//ENUM
enum Brands { Chevrolet, Cadillac, Ford, Buick, Chysler, Dodge};
const myCar: Brands= Brands.Cadillac;
console.log("Printing ENUM");
console.log(myCar); // It will print 1 which is the index for Cadillac
enum BrandsReduced {Tesla=1,GMC,Jeep} // Now we can give a new value assignation
const myTruck: BrandsReduced= BrandsReduced.GMC;
console.log("Printing value assignation");
console.log(myTruck);// It will print 2 since the first enumerated value Tesla was set to 1

enum StackingIndex {
    None =0,
    Dropdown = 1000,
    Overlay = 2000,
    Modal = 3000
};
const mySelectBoxStacking: StackingIndex = StackingIndex.Dropdown;
console.log("Priting the value of Dropdown initaled in the constant");
console.log(mySelectBoxStacking);

enum Brands2 { Chevrolet,Cadillac,Ford,Buick,Chysler,Dodge};
const mycarBrandName: string = Brands2[1];// It is possible to assign string value to enum
console.log("Printing ENUM by index will give the name");
console.log(mycarBrandName);

// Loosly-Type data
const mybrand ='Chevrolet';// TypeScript is smart enough to infer the data types of variables


