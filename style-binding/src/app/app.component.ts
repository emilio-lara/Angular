import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hero';
  isLinked:boolean=true;
  currentClasses ={
    start:true,
    active:false
  }
  currentStyle ='color:greenyellow; width: 100px';
  currentStyle2={
    color:'greenyellow',
    width: '100px'
  };
}
