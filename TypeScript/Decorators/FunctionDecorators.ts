function Banana(target: Function): void{
    target.prototype.banana = function():void{
        console.log("We have bananas homes!")
    }
    
    
}

@Banana
class FruitBasket{
    constructor(){}
}
const basket:any = new FruitBasket();// It will need the type any other wise will not compile
basket.banana();

function Banana2(message:string){
    return function(target :Function){
        target.prototype.banana2 = function () {
            console.log(message);
        }
    }
}
// Extending a class decorator
@Banana2("We have mas bananas!")
class FruitBasket2{
    constructor(){}
}

const basket2: any= new FruitBasket2();
basket2.banana2();




  
