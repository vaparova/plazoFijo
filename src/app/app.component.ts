import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SimuladoresService } from './providers/simuladores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola a Todos!';
  index: any;

  constructor(private ruta: ActivatedRoute, private simulaciones: SimuladoresService){
    this.index = this.ruta.snapshot.paramMap.get('index');
    console.log(this.index);
  }

  
}
