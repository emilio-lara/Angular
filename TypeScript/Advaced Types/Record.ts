interface Hero{
    powers:{
        [key:string]:number;
    }
}

interface Hero{
    powers: Record<string, number>
}
 