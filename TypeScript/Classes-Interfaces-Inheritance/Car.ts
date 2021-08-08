class Car{
    private distanceRun: number=0;
    private color: string;

    constructor(private isHybrid: boolean, color: string = 'red'){
        this.color = color
    }
    getGasConsumption(): string{
        return this.isHybrid? 'Very low' :'Too high'
    }
    static honk(): string {
        return 'HOOONK!'
    }

    distance(): number{
        return this.distanceRun;
    }
}

let myCar = new Car(true,'Yellow');

console.log(myCar.getGasConsumption());
console.log(myCar.distance());
console.log(Car.honk());// Do not need to use new to access a static function or variable