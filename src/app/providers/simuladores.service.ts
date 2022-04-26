import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Simulacion } from '../models/simulacion.model';



@Injectable({
  providedIn: 'root'
})
export class SimuladoresService {

  simulaciones: Simulacion[];
  

  constructor( private afs: AngularFireDatabase ) { 
    this.simulaciones = [];
  }

  setBd(){
    this.afs.object('simulaciones/').set(this.simulaciones);    
  }

  agregarSimulacion(simulacion: Simulacion): void{
    this.simulaciones.push(simulacion);
    this.setBd();
  }

  getSimulaciones(): Simulacion[]{
    return this.simulaciones;
  }

}
