// import { IOrderProducts } from "./product"

export interface IBasket {
    id: string,
    quantity: number,
}

export interface IOrder {
    products: IBasket[],
    totalPriceValue: number,
    userId: string,
    orderNumber: number,
    id: string
}

// export interface IOrderClient {
//     products: IOrderProducts[],
//     totalPriceValue: number,
//     userId: string,
//     orderNumber: number,
//     id: string
// }