import { Component} from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

grupo : FormGroup

constructor(private fb:FormBuilder, private data: DataService){
  this.grupo = this.fb.group({
    nombre:[''],
    correo: [''],
    password: [''],
  })
}

envioDatos() {
  
  this.data.addData(this.grupo.value);
  
  // Muestra en consola los datos que se están enviando
  console.log('Datos enviados:', this.grupo.value);
  
  // Muestra en consola los datos almacenados en el servicio
  console.log('Datos almacenados:', this.data.getData());
  
  
  this.grupo.reset();
}

}
