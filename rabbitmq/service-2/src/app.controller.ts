import { Controller, Put, Query } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { ApiImplicitQuery } from '@nestjs/swagger';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Client({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://hip:hop@localhost:5672'],
      queue: 'service-1:to',
    },
  })
  service1Client: ClientProxy;

  @Put('to-service-1')
  async getHello(@Query('text') text: string) {
    await this.service1Client.emit('message', { text }).toPromise();
  }
}
