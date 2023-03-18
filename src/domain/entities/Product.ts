export default class Product {
    private _id: string;
    private _name: string;
    private _description: string;
    private _price: number;
  
    constructor(id: string, name: string, description: string, price: number) {
      this._id = id;
      this._name = name;
      this._description = description;
      this._price = price;
    }
  
    // getters
    get id(): string {
      return this._id;
    }
  
    get name(): string {
      return this._name;
    }
  
    get description(): string {
      return this._description;
    }
  
    get price(): number {
      return this._price;
    }
  
    // setters
    set id(id: string) {
      this._id = id;
    }
  
    set name(name: string) {
      this._name = name;
    }
  
    set description(description: string) {
      this._description = description;
    }
  
    set price(price: number) {
      this._price = price;
    }
  }
  
/*
export default class Product {
  id: string;
  name: string;
  description: string;
  price: number;

  constructor(id: string, name: string, description: string, price: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }

  // getters e setters
}
*/