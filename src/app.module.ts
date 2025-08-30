import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductoModule } from './producto/producto.module';
import { Categoria } from './producto/entities/categoria.entity';
import { Producto } from './producto/entities/producto.entity';

@Module({

  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test_node_nest',
      entities: [Categoria, Producto],
      synchronize: true,
    }),
    ProductoModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
