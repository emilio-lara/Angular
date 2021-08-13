//Property Decorator
//Could be used to log log the values assigned to class fields when instantiating objects:
function Jedi(target: Object, key: string){
    let propertyValue: string = key;
    if (key){
        Object.defineProperty(target, key, {
            get: function(){
                return propertyValue;
            },
            set: function(newValue){
                propertyValue = newValue;
                console.log(`${propertyValue} is a Jedi`);
            }
        });
    }
}
//Or when reacting to data changes:
class Character{
    @Jedi
    name: string='';
}

const character = new Character();
character.name = 'Luke';

//This will trigger the custom function 'changeName()' when the name property is changed.
//Method Decorator
//It is used to detect, log or intervene. Logging example:

function NameChanger(callbackObject: any): Function{
    return function(target: Object, key: string): void {
        let propertyValue: string = key;
        if (key){
            Object.defineProperty(target, key, {
                get: function() {
                    return propertyValue;
                },
                set: function(newValue){
                    propertyValue = newValue;
                    callbackObject.changeName.call(this, propertyValue);
                }
            });
        }
    }
}

class Character2{
    @NameChanger({
        changeName: function(newValue: string): void{
            console.log(`You are now known as ${newValue}`);
        }
    })
    name: string='';
}

let character2 = new Character2();
character2.name = 'Anakin';

function Log(){
    return function(target:any, propertyKey: string, descriptor: PropertyDescriptor){
        const oldMethod = descriptor.value;
        descriptor.value = function newFunc(...args:any[]){
            let result = oldMethod.apply(this, args);
            console.log(`${propertyKey} is called with ${args.join(', ')} and result ${result}`);
            return result;
        }
    }
}

class Hero{
    @Log()
    attack(...args:[]){ return args.join(); }
}

const hero = new Hero();
hero.attack();

/*Used to look into the parameter value of functions or constructors and perform operations 
elsewhere, such as logging or replicating data:

*/

function Log2(target: Function, key:string, parameterIndex: number) {
    const funtionLogged = key || target.prototype.constructor.name;
    console.log(`The parameter in position ${parameterIndex} at ${funtionLogged} has been decorated`);
}

class Greeter{
    greeting:string='';

    constructor(@Log2 phrase:string){
        this.greeting=phrase;
    }
}