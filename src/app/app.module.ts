import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './autentificacion/login/login.component';
import { HomeComponent } from './autentificacion/home/home.component';
import { RegisterComponent } from './autentificacion/register/register.component';
import { RegisteModule } from './autentificacion/registe/registe.module';
import { CredencialComponent } from './Usuario/credencial/credencial.component';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisteModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
