import {IBasket, IOrder} from "../interfaces/order";

// описание файлов, которые будут записываться в базу данных
export class OrderDto implements IOrder {
    products: IBasket[];
    totalPriceValue: number;
    userId: string;
    orderNumber: number;
    id: string;

    constructor(products, totalPriceValue, userId) {
        this.products = products;
        this.totalPriceValue = totalPriceValue;
        this.userId = userId;
    }

}