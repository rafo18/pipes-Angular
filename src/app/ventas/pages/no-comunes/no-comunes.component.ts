import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  //i18nselect
  nombre:string = 'Rafael';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nplural

  clientes: string[] = ['Maria', 'pedro','juan','carlos','blabla']
  clientesMapa = {
    '=0': 'no tenemos ni un cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos cliente esperando',
    'other': 'tenemos # clientes espernado'
  }
}
