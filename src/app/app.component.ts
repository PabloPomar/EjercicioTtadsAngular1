import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public countedValue = 0 ;
  public valorCont= 0;
  public stepAct= 0

  onFirstPlusClick(valor){
    console.log("Click N°:" + valor );
  }

  devolverValor(valor) {
    this.valorCont = valor;
  }

  asignarStep(valor) {
    this.stepAct = valor
  }
}
