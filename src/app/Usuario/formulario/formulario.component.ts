import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { FormularioService } from '../service/formulario.service';
import { log } from 'console';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
informacion: FormGroup;
static ultimoId = 0;

constructor(private fb:FormBuilder, private data: FormularioService){
  FormularioComponent.ultimoId++;
this.informacion = this.fb.group({
  nombre: [''],
  telefono: [''],
  curp:[''],
  correo: [''],
  id:[FormularioComponent.ultimoId]
})
}

regresaDatos(){
  this.data.recibeDatos(this.informacion.value)
  console.log(this.informacion.value);
  this.informacion.reset();
  
}
}
