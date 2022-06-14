import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlazoFijoComponent } from './plazo-fijo/plazo-fijo.component';
import { SaldoComponent } from './saldo/saldo.component';
import { MenuComponent } from './menu/menu.component';
import { CrearPfComponent } from './crear-pf/crear-pf.component';
import { ConexionComponent } from './conexion/conexion.component';



@NgModule({
    declarations: [
        PlazoFijoComponent,
        SaldoComponent,
        MenuComponent,
        CrearPfComponent,
        ConexionComponent,

    ],
    imports: [
        CommonModule,
    ],
    exports: [
        PlazoFijoComponent,
        SaldoComponent,
        MenuComponent,
        CrearPfComponent,
        ConexionComponent,
    ]
})
export class ComponentsModule{}