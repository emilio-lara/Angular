//Arrow Functions simple
const double = x=>x*2;
console.log("Printing Arrow functions");
console.log(double(5));
// Arrow Funtions with parametes
const add=(x,y)=>x+y;
console.log("Printing Arrow functions with parameters");
console.log(add(5,4));

//Arrow Funtions with Statements
const addAndDouble =(x,y)=>{
    const sum =x+y;
    return sum*2;
}
console.log("Printing Arrow functions with parameter and statements");
console.log(addAndDouble(8,9));

// Self Assigning
function delayedGreeting(name:string):void {
    this.name = name;

    this.greet = function () { // will give undefined
        setTimeout(function() {
            console.log("Hello "+ this.name)
        },0);
    }
    this.greet2 = function () { // will give name
        setTimeout(()=> {
            console.log("Hello "+ this.name)
        },0);
    }
    
}
console.log("Printing Self Assigning"); 
const greeting = new delayedGreeting('John');
greeting.greet();
greeting.greet2();
