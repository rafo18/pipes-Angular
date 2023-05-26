import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {
  enMayusculas: boolean = false
  heroes:Heroe[] = [
    {
      nombre:'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre:'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre:'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre:'Robin',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre:'Linterna Verde',
      vuela: true,
      color: Color.verde
    },

  ]

  cambiar(){
    this.enMayusculas = !this.enMayusculas
  }



}
