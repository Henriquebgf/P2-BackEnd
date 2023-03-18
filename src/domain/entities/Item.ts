import Product from './Product';

export default class Item {
  id: string;
  product: Product;
  quantity: number;

  constructor(id: string, product: Product, quantity: number) {
    this.id = id;
    this.product = product;
    this.quantity = quantity;
  }

  // getters e setters
}