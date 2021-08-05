function sayHello(name: string): string{
    return 'Hello, '+name;
}
//calling function sayHello
console.log("Priting Function return out put");
console.log( sayHello("Peter Pan"));

const sayHello2=function (name: string) : string{//NOT A GOOD PRACTICE TO USED THIS METHOD ASSIGN A FUCTION TO A CONSTANT
    return 'Hello, '+ name;
}
console.log("Printing Function assigned to a const");
console.log(sayHello2("Michel Jackson"));

const sayHello3 :(name: string)=> string=function(name:string):string {// RIGHT WAY TO ASSIGN A FUCTION TO A COSTANT
        return 'Hello, '+ name;
}
console.log("Printing lambda assigned to a constant");
console.log(sayHello3("Pedro El Escamoso"));

//Optional Parameters
function greetMe(name:string, greeting?: string) {
    if(!greeting){
        greeting = 'Hello';
    }
    return greeting+' , '+name;
}
console.log("Printing optional parameters");
console.log(greetMe("Edurdo"));

function greetMe2(name: string, greeting: string='Hello'):string {
    return `${greeting}, ${name}`    
}

console.log("Printing Parameter part2");
console.log(greetMe2("Fernado"));
console.log(greetMe2("Fernado","Welcome"));
//Rest Parameters
function greetPeople(greeting: string,names:string[]): string {
    return greeting + ', '+ names.join(' and ') + '!';
}
let array:string[]=["Maria","Perla","Yolanda","Blanca","Siquiel"]

console.log(greetPeople("Hello",array));

