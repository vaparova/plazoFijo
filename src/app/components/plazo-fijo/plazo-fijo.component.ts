import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Simulacion } from 'src/app/models/simulacion.model';
import { SimuladoresService } from 'src/app/providers/simuladores.service';

@Component({
  selector: 'app-plazo-fijo',
  templateUrl: './plazo-fijo.component.html',
  styleUrls: ['./plazo-fijo.component.css']
})
export class PlazoFijoComponent implements OnInit {
  dias = 30;
  capital = 1000;
  simulacion: Simulacion;
  tasa = 40;
  simulaciones: Simulacion[] = [];
  formulario: FormGroup;
  habilitar = true;

  constructor(public simuladores: SimuladoresService, private fb: FormBuilder) { 
    this.simulacion = new Simulacion(1000, 30, 41);
    this.simulacion.calcularInteres();
    this.formulario = this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(): FormGroup{
    return this.fb.group({
      dias: ['',[Validators.required, Validators.min(30)]],
      capital: ['', [Validators.required, Validators.min(1000)]]
    });
  }

  habilitarForm(){
    !this.habilitar;
  }

  calcularInteres(){
    this.simulacion = new Simulacion(this.capital, this.dias, this.tasa);
    this.simulacion.calcularInteres();
    this.agregaSimulacion(this.simulacion);
    this.verSimulaciones();
  }

  incrCap(incr: number){
    this.capital += incr;
    this.calcularInteres();
  }

  incrDias(incr: number){
    this.dias += incr;
    this.calcularInteres();
  }

  agregaSimulacion(simulacion: Simulacion){
    this.simuladores.agregarSimulacion(simulacion);
  }

  verSimulaciones(){
    this.simulaciones = this.simuladores.getSimulaciones();
  }
}
