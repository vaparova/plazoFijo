import { Component, OnInit } from '@angular/core';
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
  resultado: string;
  simulacion: Simulacion;
  tasa = 40;

  constructor(public simuladores: SimuladoresService) { 

    this.resultado = simuladores.prueba();
    this.simulacion = new Simulacion(1000, 30, 41);
    this.simulacion.calcularInteres();
  }

  ngOnInit(): void {
  }

  calcularInteres(){
    this.simulacion = new Simulacion(this.capital, this.dias, this.tasa);
    this.simulacion.calcularInteres();
  }

  incrCap(incr: number){
    this.capital += incr;
    this.calcularInteres();
  }

  incrDias(incr: number){
    this.dias += incr;
    this.calcularInteres();
  }
}
