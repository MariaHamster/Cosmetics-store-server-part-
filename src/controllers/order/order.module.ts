import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Order, OrderSchema} from "../../shemas/order";
import {OrderController} from "./order.controller";
import {OrderService} from "../../services/order/order.service";
import { ProductService } from 'src/services/product/product.service';
import {Product, ProductSchema} from "../../shemas/product";

@Module({
    imports: [MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}, {name: Product.name, schema: ProductSchema}])],
    controllers: [OrderController],
    providers: [OrderService, ProductService],
})
export class OrderModule {}
