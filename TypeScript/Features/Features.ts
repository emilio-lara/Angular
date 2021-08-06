// Spread parameter
const newItem=3;
const oldArray = [1,2];
const newArray =[...oldArray,newItem];
console.log("Printing the combinate array features")
console.log(newArray);

const oldPerson = {name: 'John'};
const newPerson = {...oldPerson,age:20}
console.log(newPerson);


let parameter='parameter';
let parameter2='parameter2';


//String HARD READABILITY 
const url='http://path_domain' +
'path_to_resource'+parameter+
'='+'param2='+
parameter2;

let baseURL='http://path_domain';
let path_to_resource='path_to_resource';
// String IMPROVED READABILITY
const url2=
`${baseURL}/${path_to_resource}?
param=${parameter}&param2=${parameter2}`;



