import {IProduct} from "../interfaces/product";

// описание файлов, которые будут записываться в базу данных
export class ProductDto implements IProduct {
    name:string;
    description:string;
    price:string;
    type: string;
    img:string;
    id:string;

    constructor(name, description, price, type, img) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.type = type;
        this.img = img;
    }

}