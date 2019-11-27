import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  
  /**
   * Atributo para paginado de la tabla
   */
  public pageActual: number = 1;
  
  pagos: any[] = [];
  url_clientes: string = 'http://localhost:8080//api/caja/ObtenerPagos';
  // url_mesas:string='http:····/clientes';
  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this.url_clientes)
      .subscribe((resp: any) => {
        this.pagos = resp;
      })
  }

  ngOnInit() {
  }

}
