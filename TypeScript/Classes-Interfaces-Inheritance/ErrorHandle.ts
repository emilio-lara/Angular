// Interfaces may use optional members
interface Exception{
    message:string;
    id?:number;
}

interface ErrorHandler{
    exception: Exception[];
    logException(message:string, id?:number):void
}
interface ExceptionHandlerSettings{
    logAllExceptions:boolean;
}

class CustomErrorHandler implements ErrorHandler{
    exception: Exception[]=[];
    logAllExceptions: boolean;

    constructor(settings: ExceptionHandlerSettings){
        this.logAllExceptions = settings.logAllExceptions
    }
    

    logException(message:string, id?: number):void{
      this.exception.push({message,id}); 
    }

    
}