import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  hero="DrogFisher";
  //heroes:string[]=["Superman","Batman","SpiderMan","Hulk"];
  heroes="Los heroes mas perrones del mundo";
  today:Date = new Date();

  onLike(){
    window.alert(`I like ${this.hero}`);
    this.hero = 'Boothstomper';
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
