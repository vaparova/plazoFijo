import { Component, OnInit } from '@angular/core';
import { Saldo } from 'src/app/models/saldo';
import { SimuladoresService } from 'src/app/providers/simuladores.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {
  saldo: Saldo;

  constructor(private simulaciones: SimuladoresService) { 
    this.saldo = this.simulaciones.getSaldo();
  }

  ngOnInit(): void {
  }

}
