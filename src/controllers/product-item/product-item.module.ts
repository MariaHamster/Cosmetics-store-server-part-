import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {ProductService} from "../../services/product/product.service";
import {Product, ProductSchema} from "../../shemas/product";
import {ProductItemController} from "./product-item.controller";

@Module({
    imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}])],
    controllers: [ProductItemController],
    providers: [ProductService],
})
export class ProductItemModule {}