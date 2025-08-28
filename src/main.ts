import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("INICIANDO APP...!!!")

  //Swagger
  const config = new DocumentBuilder()
    .setTitle('API Documentacion productos')
    .setDescription('Esta es una API en NestJS')
    .setVersion('1.0')
    .addTag('APIs')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);
  //End Suagger

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
