import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Mesa } from '../mesa/Mesa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  urlIniciar = 'http://localhost:8080/restaurante/simular';
  // url_mesas:string='http:····/clientes';
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(){
    
  }

  iniciarSimulacion(){
    this.httpClient.get(this.urlIniciar)
      .subscribe((resp: any) => {
        this.router.navigate(['clientes']);
      });
  }
}
