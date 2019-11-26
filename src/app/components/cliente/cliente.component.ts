import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  /**
   * Atributo para paginado de la tabla
   */
  public pageActual: number = 1;
  
  clientes: any[] = [];
  url_clientes: string = 'http://localhost:8080//api/cliente/obtenerClientes';
  // url_mesas:string='http:····/clientes';
  constructor(private httpClient: HttpClient) {
    console.log("service clientes ")
    this.httpClient.get(this.url_clientes)
      .subscribe((resp: any) => {
        this.clientes = resp;
        console.log(resp);
      })
  }
  ngOnInit() {
  }

}
