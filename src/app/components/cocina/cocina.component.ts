import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent implements OnInit {


  /**
   * Atributo para paginado de la tabla
   */
  public pageActual: number = 1;
  
  ordenes: any[] = [];
  url_clientes: string = 'http://localhost:8080//api/cocina/obtenerListaOrdenesPreparadas';
  // url_mesas:string='http:····/clientes';
  constructor(private httpClient: HttpClient) {
    console.log("service cocina ")
    this.httpClient.get(this.url_clientes)
      .subscribe((resp: any) => {
        this.ordenes = resp;
        console.log(resp);
      })
  }

  ngOnInit() {

  }

}
