import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {OrderService} from "../../services/order/order.service";
import {Order} from "../../shemas/order";
import {OrderDto} from "../../dto/order-dto";


@Controller('order')
export class OrderController {

    constructor(private orderService: OrderService) {
    }

    @Get()
    getAllOrder(): Promise<Order[]> {
        return this.orderService.getAllOrder();
    }

    @Get(':userId')
    getOrderByUserId(@Param('userId') userId: string): Promise<Order[]> {
        return this.orderService.getOrderByUserId(userId);
    }

    @Post()
    sendOrder(@Body() data: OrderDto): Promise<Order>  {
        return this.orderService.sendOrder(data);
    }

    @Delete()
    removeAllOrder(): void {
        this.orderService.deleteAllOrder();
    }

    @Delete(':userId')
    removeAllOrderByUserId(@Param('userId') userId: string): void {
        this.orderService.deleteAllOrderByUserId(userId);
    }

}
