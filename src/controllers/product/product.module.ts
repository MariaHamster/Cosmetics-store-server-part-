import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../../static/private/constants";
import {JwtStrategyService} from "../../services/authentication/jwt-strategy/jwt-strategy.service";
import {ProductController} from "./product.controller";
import {ProductService} from "../../services/product/product.service";
import {Product, ProductSchema} from "../../shemas/product";

@Module({
    imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret
        }),
    ],
    controllers: [ProductController],
    providers: [ProductService, JwtStrategyService],
})
export class ProductModule {}