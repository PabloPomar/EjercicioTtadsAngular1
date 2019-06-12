import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { BotonLocoComponent } from './boton-loco/boton-loco.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BotonLocoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
