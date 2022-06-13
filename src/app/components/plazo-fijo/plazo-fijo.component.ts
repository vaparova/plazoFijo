import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  mjeError = '';
  errordb = false;
  @Input() mensaje = '';

  constructor(public simuladores: SimuladoresService, private fb: FormBuilder, private route: Router) { 
    this.simulacion = new Simulacion(1000, 30, 41);
    this.simulacion.calcularInteres();
    this.formulario = this.crearFormulario();
    this.simuladores.getBd().then( () =>{
      this.simulaciones = this.simuladores.getSimulaciones();
    }).catch( (err: Error) => {
      this.errordb = true;
      this.mjeError = 'error db!';
    });
    this.setForm();
  }

  ngOnInit(): void {
  }

  crearFormulario(): FormGroup{
    return this.fb.group({
      dias: ['',[Validators.required, Validators.min(30)]],
      capital: ['', [Validators.required, Validators.min(1000)]]
    });
  }

  setForm(){
    this.formulario.controls['dias'].setValue(this.dias);
    this.formulario.controls['capital'].setValue(this.capital);
    console.log(this.formulario);
    this.verificarForm();
  }

  habilitarForm(){
    // event.preventDefault();
    this.habilitar = !this.habilitar;
    console.log(this.habilitar);
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
    this.marcarFormulario();
    this.setForm();
  }

  incrDias(incr: number){
    this.dias += incr;
    this.calcularInteres();
    this.marcarFormulario();
    this.setForm();
  }

  agregaSimulacion(simulacion: Simulacion){
    this.simuladores.agregarSimulacion(simulacion);
  }

  verSimulaciones(){
    this.simulaciones = this.simuladores.getSimulaciones();
  }

  marcarFormulario(){
    console.log('marcar formulario'); 
    this.formulario.controls['capital'].markAsTouched();
    this.formulario.controls['dias'].markAsTouched();
  } 

  verificarForm(){
    if (this.formulario.invalid){
      alert('Formulario Invalido!');
    }
  }

  crearPF(index: number){
    this.route.navigateByUrl(`/crear/${index}`);
  }
}
