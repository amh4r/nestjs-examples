import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageBrokerModule } from './modules/message-broker/message-broker.module';

@Module({
  imports: [MessageBrokerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
