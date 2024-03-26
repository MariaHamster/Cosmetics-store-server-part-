import {Body, Controller, Delete, Get, Param, Post, UseInterceptors} from '@nestjs/common';
import {ProductService} from "../../services/product/product.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {IProductClient} from "../../interfaces/product";
import { Product } from 'src/shemas/product';

@Controller('product-item')
export class ProductItemController {

    constructor(private productService: ProductService) {
    }
    static imgName: string;

    @Get()
    getNewProducts(): Promise<Product[]> {
        return this.productService.getNewProducts();
    }

    @Get(':id')
    getProductById(@Param('id') id: string): Promise<Product[]> {
        return this.productService.getProductById(id);
    }

    @Post()
    @UseInterceptors(FileInterceptor('img', {
            storage: diskStorage({
                destination: './public/',
                filename: (req , file , cb) => {
                    const imgType = file.mimetype.split('/')
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                    const imgName = file.fieldname + '-' + uniqueSuffix+'.'+imgType[1]

                    cb(null, imgName);
                    ProductItemController.imgName = imgName;
                }
            })
        })
    )
    initProduct(@Body() body: IProductClient): void  {
        body.img = ProductItemController.imgName;
        this.productService.uploadProduct(body);
    }

    @Delete(':id')
    removeProductById(@Param('id') id: string): void {
        this.productService.deleteProductById(id);
    }

}
