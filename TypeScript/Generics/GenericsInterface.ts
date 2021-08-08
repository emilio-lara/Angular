interface Shape{
    area(): number;
}
class Square implements Shape{
    area(){return 1;}
}
class Circle implements Shape{
    area(){return 2;}
}
function allAreas<T extends Shape> (...args:T[]):number{
    let total =0;
    args.forEach(x=>{
        total +=x.area();
    });
    return total;
}

console.log( allAreas(new Square(), new Circle()));