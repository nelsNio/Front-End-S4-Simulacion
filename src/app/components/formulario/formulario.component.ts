import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Mesa } from './Mesa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  listaMesas: Mesa[] = [];

  urlIniciar = 'http://localhost:8080/restaurante/simular';
  // url_mesas:string='http:····/clientes';
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    for (let i = 0; i < 14; i++) {
      const mesa = new Mesa(this.ctx);
      this.listaMesas = this.listaMesas.concat(mesa);
    }
    // dibuja primera fila
    let posicion = 0;
    for (let z = 0; z < 5; z++) {
      this.listaMesas[z].draw(75 + posicion, 75);
      this.dibujarSillas(posicion, 0);
      posicion += 200;
    }

    // dibuja segunda fila
    posicion = 0;
    for (let z = 5; z < 10; z++) {
      this.listaMesas[z].draw(75 + posicion, 230);
      this.dibujarSillas(posicion, 155);
      posicion += 200;
    }

    // dibuja tercera fila
    posicion = 0;
    for (let z = 10; z < 14; z++) {
      this.listaMesas[z].draw(75 + posicion, 385);
      this.dibujarSillas(posicion, 310);
      posicion += 200;
    }
  }

  dibujarSillas(x: number, y: number) {
    // this.ctx.fillStyle = 'green';
    // Silla 1
    this.ctx.fillRect(65 + x, 5 + y, 20, 20);

    // Silla 2
    this.ctx.fillRect(10 + x, 45 + y, 20, 20);

    // Silla 3
    this.ctx.fillRect(120 + x, 45 + y, 20, 20);

    // Silla 4
    this.ctx.fillRect(30 + x, 115 + y, 20, 20);

    // Silla 5
    this.ctx.fillRect(100 + x, 115 + y, 20, 20);
  }

  iniciarSimulacion(){
    this.httpClient.get(this.urlIniciar)
      .subscribe((resp: any) => {
        this.router.navigate(['clientes']);
      });
  }
}
