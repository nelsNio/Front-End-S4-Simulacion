import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {
  mesas:any[]= [];
  // url_mesas:string='https://sd-rusia.firebaseio.com/.json';
  url_mesas:string='http:····/mesas';
  constructor(private httpClient: HttpClient) { 
    console.log("service mesas ")
    this.httpClient.get(this.url_mesas)
      .subscribe((resp:any)=>{
        this.mesas=resp;
        console.log(resp);
      })
  }

  ngOnInit() {
  }

}
