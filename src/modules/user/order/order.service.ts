import { Injectable, Inject } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderRepository } from './order.repository';
import { KFK_NAMES, PaymentEvents } from '../../../common/utils';

@Injectable()
export class OrderService {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private orderRepository: OrderRepository,
    @Inject(KFK_NAMES.PAYMENT_SERVICE)
    private paymentClient: ClientKafka
    ) {}

  async createOrder(data: CreateOrderDto) {

    // Save data in order repository
    const createdOrder = await this.orderRepository.createOrder(data);

    // Make kafka call
    this.paymentClient.emit(PaymentEvents.PAYMENT_ORDER_CREATION, createdOrder);

  }
}
