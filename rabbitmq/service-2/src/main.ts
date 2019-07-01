import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder().setTitle('Service 2').build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://hip:hop@localhost:5672'],
      queue: 'service-2:to',
    },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(3002);
}

bootstrap();
