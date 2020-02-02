import { Mesa } from './mesa';
import { OrdenPersonal } from './orden-personal';
import { EstrategiaPago } from './estrategia-pago.enum';

export class Orden {

    id: Number;
	mesa: Mesa;
	ordenesPersonales: Array<OrdenPersonal> =[];
	estrategiaPago: EstrategiaPago;
	estaPreparado: Boolean;

}
