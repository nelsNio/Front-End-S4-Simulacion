import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DiaTrabajo } from '../interfaces/dia-trabajo';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private restaurant_url_endpoint : String = "http://localhost:8080/restaurante";

  constructor(private http: HttpClient) { }

  /**
   * Método que obtiene el reporte de los días de trabajo del restaurante
   */
  obtenerReporteDiasTrabajo():Observable<DiaTrabajo[]>{
    return this.http.get<DiaTrabajo>(this.restaurant_url_endpoint+"/generarEstadisticas").pipe(
      map((response: any) =>{
        let dias = response.dias as DiaTrabajo[];
        return dias;
      })
    )
  }
}
