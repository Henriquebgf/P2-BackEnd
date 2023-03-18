import Product from './Product';

export default class Item {
  private _id: string;
  private _product: Product;
  private _quantity: number;

  constructor(id: string, product: Product, quantity: number) {
    this._id = id;
    this._product = product;
    this._quantity = quantity;
  }

  // getters
  get id(): string {
    return this._id;
  }

  get product(): Product {
    return this._product;
  }

  get quantity(): number {
    return this._quantity;
  }

  // setters
  set id(id: string) {
    this._id = id;
  }

  set product(product: Product) {
    this._product = product;
  }

  set quantity(quantity: number) {
    this._quantity = quantity;
  }
}


/*import Product from './Product';

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
}*/