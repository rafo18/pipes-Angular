import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
