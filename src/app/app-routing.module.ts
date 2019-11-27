import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MesaComponent } from './components/mesa/mesa.component';
import { CajaComponent } from './components/caja/caja.component';
import { CocinaComponent } from './components/cocina/cocina.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { MeseroComponent } from './components/mesero/mesero.component';
import { ReportesComponent} from './components/reportes/reportes.component'
const routes: Routes = [
  {path:'formulario',component:FormularioComponent},
  {path:'clientes',component:ClienteComponent},
  {path:'cocina',component:CocinaComponent},
  {path:'caja',component:CajaComponent},
  {path:'mesero',component:MeseroComponent},
  {path:'mesas',component:MesaComponent},
  {path: 'reportes', component: ReportesComponent},
  {path:'',pathMatch:'full',redirectTo:'formulario'},
  {path:'**',pathMatch:'full',redirectTo:'formulario'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
