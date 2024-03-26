import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IProduct } from 'src/interfaces/product';
import { ProductService } from 'src/services/product/product.service';
import { Product } from 'src/shemas/product';

@Controller('product-search')
export class ProductSearchController {

    constructor(private productService: ProductService) {
    }

    // @Get('/:limit/:page')
    // getPageProducts(@Param('limit') limit: string, @Param('page') page: string): Promise<Product[]> {
    //     return this.productService.getPageProducts(limit, page);
    // }

    @Get(':page')
    getPageProducts(@Param('page') page: string): Promise<Product[]> {
        return this.productService.getPageProducts(page);
    }

    // @Post()
    // getProductsByName(@Body() body: string): Promise<IProduct[]> {
    //     return this.productService.getProductsByName(body);
    // }

}
