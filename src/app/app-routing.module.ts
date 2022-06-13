import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPfComponent } from './components/crear-pf/crear-pf.component';
import { PlazoFijoComponent } from './components/plazo-fijo/plazo-fijo.component';

const routes: Routes = [
  {path: 'simular', component: PlazoFijoComponent},
  {path: 'crear/:id', component: CrearPfComponent},
  {path: '', component: PlazoFijoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
