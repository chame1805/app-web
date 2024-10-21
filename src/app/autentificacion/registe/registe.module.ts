import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UsuarioDatosModule } from '../../Usuario/usuario-datos/usuario-datos.module';
import { FormularioComponent } from '../../Usuario/formulario/formulario.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    UsuarioDatosModule
  ],
  exports:[
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UsuarioDatosModule
  ],
})
export class RegisteModule { }
