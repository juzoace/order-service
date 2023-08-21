import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/order/order.module';
import { AdminModule } from './modules/admin/order/order.module';


@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      useFactory: () => ({
        ttl: 60,
        limit: 1500,
      }),
    }),
    UserModule,
    AdminModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
