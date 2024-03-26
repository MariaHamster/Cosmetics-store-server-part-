import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Order, OrderDocument} from "../../shemas/order";

// import { Product, ProductDocument } from 'src/shemas/product';
import { IBasket, IOrder } from 'src/interfaces/order';
import { IProduct } from 'src/interfaces/product';
import { ProductService } from '../product/product.service';

@Injectable()
export class OrderService {

    constructor(
        @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        private productService: ProductService) {
    }

    async getAllOrder(): Promise<Order[]> {
        return this.orderModel.find();
    }

    // async getOrderByUserId(userId: string): Promise<Order[]> {
    //     return this.orderModel.find({"userId" : userId});
    // }

    async getOrderByUserId(userId: string): Promise<any> {
        const orderInfo: IOrder[] = (await this.orderModel.find({"userId" : userId}));
        const products = [];
        const productsIdAndQuantity: IBasket[] = (await this.orderModel.find({"userId" : userId})).map(item => item.products).flat();

        for (const product of productsIdAndQuantity) {
           await this.productService.getProductById(product.id).then(result => {
                products.push(result[0]);
            });  
        }

        const uniq = new Set(products.map(e => JSON.stringify(e)));
        const productsInfo = Array.from(uniq).map(e => JSON.parse(e));
         
        return {productsInfo, orderInfo}
    } 


    async sendOrder(data): Promise<Order> {
        const orderData = new this.orderModel(data);
        const userId = data.userId;
        if (userId) {
            orderData.orderNumber = Object.keys(await this.orderModel.find({"userId" : userId})).length + 1;
        } else {
            orderData.orderNumber = 0;
        }
        await orderData.save();
        return Promise.resolve(orderData)
    }

    async deleteAllOrder(): Promise<any> {
        return this.orderModel.deleteMany();
    }

    async deleteAllOrderByUserId(userId: string): Promise<any> {
        return this.orderModel.deleteMany({"userId" : userId});
    }

}
