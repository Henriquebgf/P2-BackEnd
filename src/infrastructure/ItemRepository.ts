import Item from '../domain/entities/Item';
import IItemRepository from './repositories/IItemRepository';

export default class ItemRepository implements IItemRepository {
    private items: Item[] = [];
  
    async createItem(item: Item): Promise<Item> {
      this.items.push(item);
      return item;
    }
  
    async getItems(): Promise<Item[]> {
      return this.items;
    }
  
    async getItemById(id: string): Promise<Item | undefined> {
      return this.items.find(item => item.id === id);
    }
  
    async updateItem(item: Item): Promise<Item> {
      const index = this.items.findIndex(i => i.id === item.id);
      this.items[index] = item;
      return item;
    }
  
    async deleteItem(id: string): Promise<void> {
      this.items = this.items.filter(item => item.id !== id);
    }
  }