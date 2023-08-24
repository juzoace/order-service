import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderRepository } from './order.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientsModule, Transport,  ClientProviderOptions } from '@nestjs/microservices';
import { KFK_CLIENTS, KFK_GROUPS, KFK_NAMES } from 'src/common/utils';
import config from 'src/common/config';

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderRepository, PrismaService],
  imports: [
    ClientsModule.register([
      {
        transport: Transport.KAFKA,
        name: KFK_NAMES.PAYMENT_SERVICE,
        options: {
          client: {
            brokers: config.kafka.brokers,
            clientId: KFK_CLIENTS.PAYMENT_CLIENT,
            retry: {
              retries: 3,
            },
          },
          producerOnlyMode: true,
          consumer: {
            groupId: KFK_GROUPS.PAYMENT_GROUP,
          },
        }
      }
    ] as ClientProviderOptions[])
  ]
})
export class UserModule {}
