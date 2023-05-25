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

  clientes: string[] = ['Maria', 'Pedro','Juan','Carlos','Camila','Rafael']
  clientesMapa = {
    '=0': 'no tenemos ni un cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos cliente esperando',
    'other': 'tenemos # clientes espernado'
  }

  cambiarCliente() {
    this.nombre = 'Maria',
    this.genero = 'femenino'
  }

  borrarPersona(){
    this.clientes.pop();
  }

  reiniciarContador(){
    this.clientes = this.clientes
  }


  //key value pipe

  persona = {
    Nombre: 'Rafael',
    Edad: 35,
    Direccion: 'cocha-bol'
  }

  //JsonPipe

  heroes = [
    {
      nombre: ' superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]
}
