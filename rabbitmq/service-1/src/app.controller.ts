import { Controller, Put, Query } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Client({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://hip:hop@localhost:5672'],
      queue: 'service-2:to',
    },
  })
  service2Client: ClientProxy;

  @Put('to-service-2')
  async getHello(@Query('text') text: string) {
    await this.service2Client.emit('message', { text }).toPromise();
  }
}
