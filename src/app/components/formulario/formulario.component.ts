import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  url_iniciar: string = 'http://localhost:8080/restaurante/simular';
  // url_mesas:string='http:····/clientes';
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  iniciarSimulacion(){
    this.httpClient.get(this.url_iniciar)
      .subscribe((resp: any) => {
        this.router.navigate(['clientes']);
      });
  }

}
