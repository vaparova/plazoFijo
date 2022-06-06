import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { catchError, debounce, debounceTime, fromEvent, Observable } from 'rxjs';
import { Simulacion } from '../models/simulacion.model';



@Injectable({
  providedIn: 'root'
})
export class SimuladoresService implements OnInit {

  simulaciones: Simulacion[];
  internetStatus = '';
  datosBd: any;
  

  constructor( private afs: AngularFireDatabase ) { 
    this.simulaciones = [];
    this.conexion();
  }

  ngOnInit(): void {
    console.log('servicio onInit()');
    this.conexion();
  }

  setBd(){
    this.afs.object('simulaciones/').update(this.simulaciones);    
  }

  getBd(){
    console.log('getBD');
    return new Promise( (resolve, reject) => {
    this.datosBd = this.afs.object('simulaciones/').snapshotChanges(); 
    this.datosBd.pipe(
      catchError( async (err) => reject(this.mje))
    ).subscribe( (action: { payload: { val: () => Simulacion[]; }; }) => {
      resolve(this.simulaciones = action.payload.val());
    })
      
    
  });
  }

  agregarSimulacion(simulacion: Simulacion): void{
    this.simulaciones.push(simulacion);
    this.setBd();
  }

  getSimulaciones(): Simulacion[]{
    return this.simulaciones;
  }

  conexion(){
    console.log('estado conexion');
    fromEvent(window, 'offline').pipe(
      debounceTime(100)).subscribe((event: Event) =>{
        console.log(event);
        this.internetStatus = event.type;
      });
    fromEvent(window, 'online').pipe(
      debounceTime(100)).subscribe((event: Event) =>{
        console.log(event);
        this.internetStatus = event.type;
      });
  }

  mje(mje: any): void | PromiseLike<void> {
    throw new Error('Function not implemented.');
  }
}


