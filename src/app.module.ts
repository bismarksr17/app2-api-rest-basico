import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Categoria } from './entities/categoria.entity';

@Module({

  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test_node_nest',
      entities: [Categoria,Producto],
      synchronize: true,
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
