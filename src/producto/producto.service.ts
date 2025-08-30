import { Injectable } from '@nestjs/common';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductoService {

    constructor(
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>
    ) { }

    getListaProducto() {
        return this.productoRepository.find();
    }

    guardarProducto(datos) {

    }

    getMostrarProducto(id) {

    }

    modificarProducto(id) {

    }

    eliminarProducto(id) {

    }

}
