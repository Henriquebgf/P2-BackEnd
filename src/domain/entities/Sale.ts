// src/domain/entities/Sale.ts
import User from './User';
import Item from './Item';

export default class Sale {
  private _id: string;
  private _user: User;
  private _items: Item[];
  private _total: number;

  constructor(id: string, user: User, items: Item[], total: number) {
    this._id = id;
    this._user = user;
    this._items = items;
    this._total = total;
  }

  // getters
  get id(): string {
    return this._id;
  }

  get user(): User {
    return this._user;
  }

  get items(): Item[] {
    return this._items;
  }

  get total(): number {
    return this._total;
  }

  // setters
  set id(id: string) {
    this._id = id;
  }

  set user(user: User) {
    this._user = user;
  }

  set items(items: Item[]) {
    this._items = items;
  }

  set total(total: number) {
    this._total = total;
  }
}
