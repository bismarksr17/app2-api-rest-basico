import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { ProductoService } from "./producto.service";

@Controller()
export class ProductoController {

    constructor(private readonly productoService: ProductoService) { }

    @Get("/producto")
    funListaProductos() {
        return this.productoService.getListaProducto();
    }

    @Post("/producto")
    funGuardarProducto(@Body() datos) {
        console.log(datos)
        return "Guardando Producto"
    }

    @Get("/producto/:id")
    funMostrarProducto(@Param('id') id) {
        return "Mostrando id: " + id
    }

    @Put("/producto/:id")
    funModificarProducto(@Param('id') id, @Body() datos) {
        console.log(datos)
        return "Modificar Producto"
    }

    @Patch("/producto/:id")
    funModificarProducto2(@Param('id') id, @Body() datos) {
        console.log(datos)
        return "Modificar Producto 2"
    }

    @Delete("/producto/:id")
    funEliminarProducto(@Param('id') id) {
        return "Eliminando id: " + id
    }
}
