import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home/home.component';
import { RegisterComponent } from '../register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports:[
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
})
export class RegisteModule { }
