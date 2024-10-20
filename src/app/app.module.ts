import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home/home.component';
import { RegisterComponent } from './register/register.component';
import { RegisteModule } from './registe/registe.module';

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
