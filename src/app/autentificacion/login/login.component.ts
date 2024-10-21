import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private data: DataService) {
    this.loginForm = this.fb.group({
      correo: [''],
      password: [''],
    });
  }

  login() {
    const { correo, password } = this.loginForm.value;
    const usuarios = this.data.getData(); // Obtiene todos los usuarios registrados

    // Busca el usuario que coincida con el correo y la contraseña
    const usuario = usuarios.find(u => u.correo === correo && u.password === password);
    
    if (usuario) {
      console.log('Login exitoso:', usuario);
      // Aquí puedes redirigir según el tipo de usuario
      if (usuario.tipo === 'administrativo') {
        // Redirigir a la vista de administrativo
        console.log('Redirigir a la vista de administrativo');
      } else {
        // Redirigir a la vista de usuario
        console.log('Redirigir a la vista de usuario');
      }
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
