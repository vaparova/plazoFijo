import { Injectable } from '@angular/core';
import { Simulacion } from '../models/simulacion.model';

@Injectable({
  providedIn: 'root'
})
export class SimuladoresService {

  simulaciones: Simulacion[];

  constructor() { 
    this.simulaciones = [];
  }

  agregarSimulacion(simulacion: Simulacion): void{
    this.simulaciones.push(simulacion);
  }

  getSimulaciones(): Simulacion[]{
    return this.simulaciones;
  }

}
