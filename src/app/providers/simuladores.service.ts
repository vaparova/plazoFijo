import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Simulacion } from '../models/simulacion.model';



@Injectable({
  providedIn: 'root'
})
export class SimuladoresService {

  simulaciones: Simulacion[];
  datosBd: any;
  

  constructor( private afs: AngularFireDatabase ) { 
    this.simulaciones = [];
  }

  setBd(){
    this.afs.object('simulaciones/').update(this.simulaciones);    
  }

  getBd(){
    console.log('getBD');
    return new Promise( (resolve) => {
      this.datosBd = this.afs.object('simulaciones/').snapshotChanges(); 
      this.datosBd.subscribe( (action: { payload: { val: () => Simulacion[]; }; }) => {
        resolve( this.simulaciones = action.payload.val());
        console.log(this.simulaciones);
      });
    });
  }

  agregarSimulacion(simulacion: Simulacion): void{
    this.simulaciones.push(simulacion);
    this.setBd();
  }

  getSimulaciones(): Simulacion[]{
    return this.simulaciones;
  }

}
