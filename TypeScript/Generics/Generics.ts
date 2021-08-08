function method<T>(arg:T):T {
    return arg;
}

console.log("Printing Generic function");
console.log(method<number>(1));
//console.log(method<string>(1)); // compiler will complaint about the string and passing a number

function method2<T>(arg:T[]):T[] {
    console.log(arg.length);
    return arg; 
}

class CustomPerson extends Array{}
class Person {}

const people: Person[] =[];
//const newPerson= new CustomPerson();
method2<Person>(people);
//method2<CustomPerson>(newPerson);

