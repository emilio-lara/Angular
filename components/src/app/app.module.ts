import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SoftPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SoftPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
