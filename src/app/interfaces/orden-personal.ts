import { Cliente } from './cliente';
import { PlatoOrdenado } from './plato-ordenado';

export class OrdenPersonal {

    cliente: Cliente;
    platosOrdenados: Array<PlatoOrdenado>=[];
    estaPreparado: Boolean;

}
