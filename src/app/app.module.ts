import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocinaComponent } from './components/cocina/cocina.component';
import { MeseroComponent } from './components/mesero/mesero.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CajaComponent } from './components/caja/caja.component';
import { MesaComponent } from './components/mesa/mesa.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormularioComponent } from './components/formulario/formulario.component';
//---------------http servicios-------------------
import {HttpClientModule} from '@angular/common/http'
//--------------paginado-------------------
import { NgxPaginationModule } from 'ngx-pagination';

import { from } from 'rxjs';
import { ReportesComponent } from './components/reportes/reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    CocinaComponent,
    MeseroComponent,
    ClienteComponent,
    CajaComponent,
    MesaComponent,
    MenuComponent,
    FormularioComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
