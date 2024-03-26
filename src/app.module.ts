import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./controllers/users/users.module";
import {MongooseModule} from "@nestjs/mongoose";
import {ProductModule} from "./controllers/product/product.module";
import {ProductItemModule} from "./controllers/product-item/product-item.module";
import {FeedbackModule} from "./controllers/feedback/feedback.module";
import {OrderModule} from "./controllers/order/order.module";
import { ProductSearchModule } from './controllers/product-search/product-search.module';

@Module({
  imports: [UsersModule, ProductModule,
    ProductItemModule, MongooseModule,
    FeedbackModule, OrderModule, ProductSearchModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/cosmetics')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
