import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument} from "mongoose";
import { IProduct } from "../interfaces/product";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product implements IProduct {

    @Prop() name: string;

    @Prop() description: string;

    @Prop() price: string

    @Prop() type: string

    @Prop() img: string;

    @Prop() id: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);