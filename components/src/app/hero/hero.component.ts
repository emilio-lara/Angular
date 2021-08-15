import {EventEmitter, Component, Input, OnInit, Output, SimpleChanges, OnChanges } from '@angular/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit,OnChanges {
  @Input() name!: string;
  @Output() liked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const hero = changes['name'];
    const oldValue = hero.previousValue;
    const newValue = hero.currentValue;
    if(!hero.isFirstChange()){
     console.log(`Hero changed from ${oldValue} to ${newValue}`);
    }

  }

}
