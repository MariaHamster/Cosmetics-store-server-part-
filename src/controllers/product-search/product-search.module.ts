import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {ProductService} from "../../services/product/product.service";
import {Product, ProductSchema} from "../../shemas/product";
import { ProductSearchController } from "./product-search.controller";

@Module({
    imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}])],
    controllers: [ProductSearchController],
    providers: [ProductService],
})
export class ProductSearchModule {}