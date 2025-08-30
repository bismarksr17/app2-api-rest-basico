import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entity";
import { Producto } from "./entities/producto.entity";
import { ProductoController } from "./producto.controller";
import { ProductoService } from "./producto.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Producto])
    ],
    controllers: [ProductoController],
    providers: [ProductoService],
    exports: []
})

export class ProductoModule {

}