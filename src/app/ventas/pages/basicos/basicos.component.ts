import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  nombreLower:string = 'rafael';
  nombreUpper:string = 'RAFAEL';
  nombreCompleto:string = 'RaFael BaRrEto';

  fecha: Date = new Date(); //el dia de hoy
}
