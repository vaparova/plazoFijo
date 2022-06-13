import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-pf',
  templateUrl: './crear-pf.component.html',
  styleUrls: ['./crear-pf.component.css']
})
export class CrearPfComponent implements OnInit {

  // @Input() mensaje = '';
  index = 23;

  constructor( private ruta: ActivatedRoute) { 
    this.index = this.ruta.snapshot.params['id'];
    console.log(this.index);

  }

  ngOnInit(): void {
  }

}
