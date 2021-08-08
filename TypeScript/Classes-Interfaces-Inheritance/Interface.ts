interface A{
    a
}
const instance = <A> {a:3}

instance.a=5;
console.log(instance.a);

interface DatabaseService{
    save(order:Order): void
}

class Order{};
class OrderProcessor{
    constructor(private databaseService: DatabaseService){}
    process(order){
        this.databaseService.save(order);
    }
}
//let orderProcessor = new OrderProcessor(mockLibrary.mock<DatabaseService>());
//orderProcessor.process(new Order());

const databaseServiceIntance = <DatabaseService>{};

