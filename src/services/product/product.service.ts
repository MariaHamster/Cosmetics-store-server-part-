import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Product, ProductDocument} from "../../shemas/product";
import {IProduct, IProductClient} from "../../interfaces/product";
import {ProductDto} from "../../dto/product-dto";


@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {
    }

    async getAllProduct(): Promise<Product[]> {
        return this.productModel.find();
    }

    async deleteProducts(): Promise<any> {
        return this.productModel.deleteMany({})
    }

    async getProductById(id: string): Promise<Product[]> {
        return this.productModel.find({"_id" : id});
    }

    async getNewProducts(): Promise<Product[]> {
        return (await this.productModel.find()).filter((item, index, array) => {
            if (index > (array.length - 6)) {
                return true;
            }
        });
    }

    async getPageProducts(page: string): Promise<Product[]> {
        return (await this.productModel.find()).filter((item, index, array) => {
            let page2: number = Number(page);
            console.log(page2);
            // const pageNumber = Math.floor(array.length/20) + 1;
            // if ((page2 = 1) || (index < 20)) {
            //     return true;
            // }
            // if ((page2 > 1)) {
                if ((index >= ((page2 - 1) *20 )) || (index < ( page2 * 20 ))) {
                    console.log(index, item);
                    return true;
                }
            // }
        });
    }

    async getProductByType(type: string): Promise<Product[]> {
        return this.productModel.find({"type" : type});
    }

    async uploadProduct(body: IProductClient) {
        const product = new ProductDto(body.name, body.description, body.price, body.type, body.img);
        const productData = new this.productModel(product);
        await productData.save();
    }

    async getProductsByName(body): Promise<IProduct[]> {
        return this.productModel.find({name: { "$regex": body, "$options": "i" }})
    }

    // async deleteProductById(id: string): Promise<Product[]> {
    async deleteProductById(id: string): Promise<any> {
        // return this.productModel.find({"_id" : id});
        return this.productModel.findOneAndDelete({"_id" : id});
    }

}
