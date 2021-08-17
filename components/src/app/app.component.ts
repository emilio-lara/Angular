import { Component} from '@angular/core';
import { Hero } from './-hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Hero {
  id!: number;
  name!: string;
  team!: string;

  title = 'my-app';
  hero="DrogFisher";
  hero1={id:1,name:'avenger',team:"DC"};
  //heroes:string[]=["Superman","Batman","SpiderMan","Hulk"];
  heroes="Los heroes mas perrones del mundo";
  today:Date = new Date();
  heroes1:Hero[]=[
    {id:1,name:"super",team:"DC"},
    {id:2,name:"super2",team:"BC"}
  ]

  trackByHeroes(index: number, hero:Hero): number{
    return hero.id;
  }

  onLike(){
    window.alert(`I like ${this.hero}`);
    this.hero = 'Boothstomper';
    //this.heroes1.push({id:1,name:"super",team:"DC"},{id:2,name:"super2",team:"BC"})
  }
  hero2={
    names:{
      name:'Boothtomper',
      realName: 'Alfie Best'
    },
    planet:'Earth',
    color:'cyan'
  }



}
