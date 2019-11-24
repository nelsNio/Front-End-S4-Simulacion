import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any[] = [];
  url_clientes: string = 'https://lada-f35b2.firebaseio.com/.json';
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
