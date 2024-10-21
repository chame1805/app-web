import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private fordat = new BehaviorSubject<any[]>([]);
  info$ = this.fordat.asObservable();


  recibeDatos(data: any){
    const datos = this.fordat.value
    this.fordat.next([...datos,data])
  }


  getDatos(): any[]{
    return this.fordat.value
  }
}
