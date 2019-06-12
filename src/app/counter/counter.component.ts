import { Component,EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() count = 0;
  @Input() step = 2;
  @Output() plusClicked = new EventEmitter();
  @Output() valorActual= new EventEmitter();
  @Output() stepActual= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  alCuadrado(x){
    return x*x
  }



 onRestClick() {
   this.count = this.count - this.step;
   this.valorActual.emit(this.count);
   this.stepActual.emit(this.count);
 }

 onPlusClick() {
   this.count = this.count + this.step;
   this.plusClicked.emit(this.count);
   this.valorActual.emit(this.count);
   this.stepActual.emit(this.count);
 }

}
