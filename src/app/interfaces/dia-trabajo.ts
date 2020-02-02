import { Orden } from './orden';
import { Pago } from './pago';
import { ReporteOrdenesPlato } from './reporte-ordenes-plato';
import { ReporteCalificacionPlato } from './reporte-calificacion-plato';
import { ReporteTipoPlatoOrdenado } from './reporte-tipo-plato-ordenado';

export class DiaTrabajo {

    id: Number;
    ordenes: Array<Orden>;
    pagos: Array<Pago>= [];
    platosConNumeroVecesOrdenado: Array<ReporteOrdenesPlato> = [];
    platosMejorCalificadosPorTipoPlato: Array<ReporteCalificacionPlato> = [];
    numeroOrdenesPorEstrategiaPago: Array<ReporteTipoPlatoOrdenado> = [];

}

