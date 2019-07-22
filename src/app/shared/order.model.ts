import { OrderItem } from './item-checkout.model';

class Order {
    constructor(
        public idBuyer: number,
        public numberCard: string,
        public name: string,
        public cod: string,
        public dateVenc: string,
        public formPay: string,
        public items: Array<OrderItem>,
        public total: number,
        public created: Date,
        public id?: number,
    ) { }
}

export { Order }
