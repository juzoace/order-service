import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import type { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import { Logger, RequestMethod } from '@nestjs/common';
import { AppModule } from './app.module';
import config from './common/config';
import { KFK_CLIENTS, KFK_GROUPS } from './common/utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true });
  app.enableShutdownHooks();

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      consumer: {
        groupId: KFK_GROUPS.ORDER_GROUP,
        allowAutoTopicCreation: true,
      },
      subscribe: { fromBeginning: true },
      client: {
        brokers: config.kafka.brokers,
        clientId: KFK_CLIENTS.ORDER_CLIENT,
      }
    }
  })

  const swagConfig = new DocumentBuilder()
    .setTitle('Order service Api')
    .setDescription('API Documentation for Order service')
    .setVersion('1.0')
    .build();

  app.setGlobalPrefix('api', {
    exclude: [
      { path: '', method: RequestMethod.ALL },
      { path: 'health', method: RequestMethod.ALL },
    ],
  });

  SwaggerModule.setup(
    '/docs',
    app,
    SwaggerModule.createDocument(app, swagConfig),
  );

  await app.listen(process.env.PORT);
  app.startAllMicroservices();
}

bootstrap().then(() => {
  Logger.log(`
      ------------
      Server Application Started!
      API V1: ${config.baseUrl}/
      API Docs: ${config.baseUrl}/docs
      Microservice Started Successfully
      ------------
`);
});
