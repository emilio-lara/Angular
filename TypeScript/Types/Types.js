var PI = 3.1416; // Once we declared a value for const it can not be change
//PI= 3;  will give compiler error
console.log("Printing constant");
console.log(PI);
//Number 
var age = 7;
var height = 5.6;
console.log("Printing Numbers");
console.log(age);
console.log(height);
//Boolean
var isZeroGreaterThanOne = false;
console.log("Printing Boolean");
console.log(isZeroGreaterThanOne);
// Array
var brand = ['Chevrolet', 'Ford', 'General Motor'];
var ages = [8, 5, 12, 3, 1];
console.log("Printing array");
console.log(brand);
console.log("Printing array index");
console.log(ages[0]);
// Any will allow to use anytype
var distance;
distance = '100km';
console.log("Printing type any");
console.log(distance);
distance = 1000;
console.log(distance);
var animal = 'Cheetah';
console.log("Printing Constom Type Animal");
console.log(animal);
//const animal:Animal='Turtle'; compiler does not allow Turtle is not part of animal;
//ENUM
var Brands;
(function (Brands) {
    Brands[Brands["Chevrolet"] = 0] = "Chevrolet";
    Brands[Brands["Cadillac"] = 1] = "Cadillac";
    Brands[Brands["Ford"] = 2] = "Ford";
    Brands[Brands["Buick"] = 3] = "Buick";
    Brands[Brands["Chysler"] = 4] = "Chysler";
    Brands[Brands["Dodge"] = 5] = "Dodge";
})(Brands || (Brands = {}));
;
var myCar = Brands.Cadillac;
console.log("Printing ENUM");
console.log(myCar); // It will print 1 which is the index for Cadillac
var BrandsReduced;
(function (BrandsReduced) {
    BrandsReduced[BrandsReduced["Tesla"] = 1] = "Tesla";
    BrandsReduced[BrandsReduced["GMC"] = 2] = "GMC";
    BrandsReduced[BrandsReduced["Jeep"] = 3] = "Jeep";
})(BrandsReduced || (BrandsReduced = {})); // Now we can give a new value assignation
var myTruck = BrandsReduced.GMC;
console.log("Printing value assignation");
console.log(myTruck); // It will print 2 since the first enumerated value Tesla was set to 1
var StackingIndex;
(function (StackingIndex) {
    StackingIndex[StackingIndex["None"] = 0] = "None";
    StackingIndex[StackingIndex["Dropdown"] = 1000] = "Dropdown";
    StackingIndex[StackingIndex["Overlay"] = 2000] = "Overlay";
    StackingIndex[StackingIndex["Modal"] = 3000] = "Modal";
})(StackingIndex || (StackingIndex = {}));
;
var mySelectBoxStacking = StackingIndex.Dropdown;
console.log("Priting the value of Dropdown initaled in the constant");
console.log(mySelectBoxStacking);
var Brands2;
(function (Brands2) {
    Brands2[Brands2["Chevrolet"] = 0] = "Chevrolet";
    Brands2[Brands2["Cadillac"] = 1] = "Cadillac";
    Brands2[Brands2["Ford"] = 2] = "Ford";
    Brands2[Brands2["Buick"] = 3] = "Buick";
    Brands2[Brands2["Chysler"] = 4] = "Chysler";
    Brands2[Brands2["Dodge"] = 5] = "Dodge";
})(Brands2 || (Brands2 = {}));
;
var mycarBrandName = Brands2[1];
console.log(mycarBrandName);
