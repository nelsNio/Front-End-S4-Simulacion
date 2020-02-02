import { Cliente } from './cliente';
import { EstrategiaPago } from './estrategia-pago.enum';
import { TipoPago } from './tipo-pago.enum';

export class Pago {

    id: Number;
	cliente: Cliente;
	estrategiaPago: EstrategiaPago;
	totalOrden: Number;
	tipoPago: TipoPago;

}
