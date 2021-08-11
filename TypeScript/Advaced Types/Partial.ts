interface Hero{
    name: string;
    power: number;
}

const hero: Partial<Hero> ={
    name:'Iron Man'
}

console.log(hero.name);