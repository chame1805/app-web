import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from '../formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CredencialComponent } from '../credencial/credencial.component';



@NgModule({
  declarations: [
    FormularioComponent,
    CredencialComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
  ,
  exports:[
    FormularioComponent,
    CredencialComponent
  ]
})
export class UsuarioDatosModule { }
