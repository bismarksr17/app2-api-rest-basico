import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/producto")
  funListaProductos(){
    return "Lista de productos"
  }

  @Post("/producto")
  funGuardarProducto(@Body() datos){
    console.log(datos)
    return "Guardando Producto"
  }

  @Get("/producto/:id")
  funMostrarProducto(@Param('id') id){
    return "Mostrando id: " + id
  }

  @Put("/producto/:id")
  funModificarProducto(@Param('id') id, @Body() datos){
    console.log(datos)
    return "Modificar Producto"
  }

  @Patch("/producto/:id")
  funModificarProducto2(id, @Body() datos){
    console.log(datos)
    return "Modificar Producto 2"
  }

  @Delete("/producto/:id")
  funEliminarProducto(@Param('id') id){
    return "Eliminando id: " + id
  }

}
