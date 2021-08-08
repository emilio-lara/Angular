class Stuff{
    srv:AuthService ;

    execute(){
        if(this.srv.isAuthenticated){
        }else{}
    }
}

interface AuthService{
    isAuthenticated(): boolean;
}

//Better way to test
class Stuff2 {
    
    constructor(private srv:AuthService){}
    execute(){
        if(this.srv.isAuthenticated){
            console.log("Service done!");
        }else{
            console.log("No service done!");
        }
    }
}

class MockAuthService implements AuthService{
    isAuthenticated(){return true;}
}

const srv = new MockAuthService();
const stuff= new Stuff2(srv);
stuff.execute();