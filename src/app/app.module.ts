import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocinaComponent } from './components/cocina/cocina.component';
import { MeseroComponent } from './components/mesero/mesero.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CajaComponent } from './components/caja/caja.component';
import { MesaComponent } from './components/mesa/mesa.component';

@NgModule({
  declarations: [
    AppComponent,
    CocinaComponent,
    MeseroComponent,
    ClienteComponent,
    CajaComponent,
    MesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
