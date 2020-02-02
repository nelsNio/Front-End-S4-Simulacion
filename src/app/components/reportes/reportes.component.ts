import { Component, OnInit } from '@angular/core';
import { DiaTrabajo } from 'src/app/interfaces/dia-trabajo';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

   /**
   * Atributo para paginado de la tabla
   */
  public pageActual: number = 1;
  public reporte: any;
  platosOrdenados: any[] = [];
  public diasTrabajo: Array<DiaTrabajo>= [];

  constructor(private restauranteService: RestauranteService) {}

  ngOnInit() {
    this.restauranteService.obtenerReporteDiasTrabajo().subscribe(
      diasTrabajo => {
        this.diasTrabajo = diasTrabajo
      }
    );
   
    // this.httpClient.get(this.url_estadisticas)
    // .subscribe((resp: any) => {
    //   this.diasTrabajo = 
    //   this.reporte = resp;
    //   this.platosOrdenados = this.reporte.cantidadVecesPlatoOrdenado;
    //   for (let i = 0; i < this.platosOrdenados.length; i++) {
    //     const element = this.platosOrdenados[i];
    //     console.log(element.nombre);
        
    //   }
    // })
  }

}
