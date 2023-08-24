import { Controller, Post, Body } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('order')
  @ApiOperation({ summary: 'Create an order'})
  async createOrder(@Body() data: CreateOrderDto) {
    return await this.orderService.createOrder(data);
  }
}
