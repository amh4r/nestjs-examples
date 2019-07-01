import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('message-broker')
export class MessageBrokerController {
  @EventPattern('message')
  async handler(data) {
    console.log('\nReceived message:');
    console.log(`"${data.text}"`);
  }
}
