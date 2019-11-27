import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  
  public cantidadVecesPlatoOrdenado: any;
  url_clientes: string = 'http://localhost:8080/restaurante/GenerarEstadisticas';
  // url_mesas:string='http:····/clientes';
  constructor(private httpClient: HttpClient) {
    console.log("service cocina ")
    this.httpClient.get(this.url_clientes)
      .subscribe((resp: any) => {
        this.cantidadVecesPlatoOrdenado = resp;
      })
  }


  ngOnInit() {
    
  }

}
