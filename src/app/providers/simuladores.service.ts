import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimuladoresService {

  constructor() { }

  prueba(): string{
    return 'El servicio funciona!';
  }
}
