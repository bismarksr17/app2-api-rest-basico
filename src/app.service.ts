import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Producto } from './producto/entities/producto.entity';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
  
}
