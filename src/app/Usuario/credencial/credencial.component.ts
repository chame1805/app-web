import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../service/formulario.service';
import { info } from 'console';

@Component({
  selector: 'app-credencial',
  templateUrl: './credencial.component.html',
  styleUrl: './credencial.component.css'
})
export class CredencialComponent  implements OnInit{

datos: any[]=[]
  constructor(private datForm: FormularioService){}

  ngOnInit(): void{
    this.datForm.info$.subscribe((info)=>{
      this.datos = info
    })
  }
}
