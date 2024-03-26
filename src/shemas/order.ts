import {HydratedDocument} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {IBasket, IOrder} from "../interfaces/order";

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order implements IOrder {

    @Prop() products: IBasket[];

    @Prop() totalPriceValue: number;

    @Prop() userId: string;

    @Prop() orderNumber: number;

    @Prop() id: string;

}

export const OrderSchema = SchemaFactory.createForClass(Order);