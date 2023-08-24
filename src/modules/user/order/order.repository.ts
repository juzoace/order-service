/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderRepository {
  constructor(private prisma: PrismaService) {}

  async createOrder(data: CreateOrderDto) {
    try {

      // Create order in database
      const { user_id, currency, books} = data

      const newOrder = await this.prisma.order.create({
        data: {
          user_id: user_id,
          status: 'PENDING',
          payment_Id: '',
          books: {
            create: books
          },
          amount: data.amount,
          currency,
        },
      });

      return newOrder;

    } catch(error) {
      throw new InternalServerErrorException('Error creating Order');
    }
  }
}
