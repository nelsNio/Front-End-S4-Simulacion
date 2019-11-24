import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.css']
})
export class MeseroComponent implements OnInit {
  meseros: any[] = [];
  orders: any[] = [];
  url_meseros: string = 'https://proof-95ace.firebaseio.com/.json';
  // url_mesas:string='http:····/meseros';
  constructor(private httpClient: HttpClient) {
    console.log("service meseros ")
    this.httpClient.get(this.url_meseros)
      .subscribe((resp: any) => {
        this.meseros = resp;
        getOrders(this.meseros, this.orders);
        console.log(resp);
      })
  }
  ngOnInit() {
  }

}

function getOrders(meseros: any, orders: any) {
  let i = 0;
  meseros.forEach(element => {
    let order = "";
    element.ordenes.forEach(el => {
      order += el.nombre+", ";
    });
    orders[i] = order;
    i++;
  });
}
