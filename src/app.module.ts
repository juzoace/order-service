import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/order/order.module';
import { AdminModule } from './modules/admin/order/order.module';
import { KFK_CLIENTS, KFK_GROUPS, KFK_NAMES } from './common/utils';
import config from './common/config';


@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      useFactory: () => ({
        ttl: 60,
        limit: 1500,
      }),
    }),
    ClientsModule.register([
      {
        name: KFK_NAMES.ORDER_SERVICE,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: KFK_CLIENTS.ORDER_CLIENT,
            brokers: config.kafka.brokers,
          },
          consumer: {
            groupId: KFK_GROUPS.ORDER_GROUP,
            allowAutoTopicCreation: true,
          },
        },
      },
    ]),
    UserModule,
    AdminModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
