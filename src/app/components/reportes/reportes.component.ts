import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

   /**
   * Atributo para paginado de la tabla
   */
  public pageActual: number = 1;
  public reporte: any;
  platosOrdenados: any[] = [];

  url_clientes: string = 'http://localhost:8080/restaurante/GenerarEstadisticas';
  // url_mesas:string='http:····/clientes';
  constructor(private httpClient: HttpClient) {
    console.log("service cocina ")
   
  }


  ngOnInit() {
    this.httpClient.get(this.url_clientes)
    .subscribe((resp: any) => {
      this.reporte = resp;
      this.platosOrdenados = this.reporte.cantidadVecesPlatoOrdenado;
      for (let i = 0; i < this.platosOrdenados.length; i++) {
        const element = this.platosOrdenados[i];
        console.log(element.nombre);
        
      }
      
    })
  }

}
