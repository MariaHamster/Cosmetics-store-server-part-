import {Controller, Get, Param} from '@nestjs/common';
import {ProductService} from "../../services/product/product.service";
import {Product} from "../../shemas/product";

@Controller('products')
export class ProductController {

    constructor(private productService: ProductService) {
    }

    @Get()
    getAllProduct(): Promise<Product[]> {
        return this.productService.getAllProduct();
    }

    @Get(':type')
    getProductByType(@Param('type') type: string): Promise<Product[]> {
        return this.productService.getProductByType(type);
    }

}
