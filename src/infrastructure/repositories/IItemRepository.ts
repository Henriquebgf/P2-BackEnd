import Item from '../../domain/entities/Item';

export default interface IItemRepository {
    createItem(item: Item): Promise<Item>;
    getItems(): Promise<Item[]>;
    getItemById(id: string): Promise<Item>;
    updateItem(item: Item): Promise<Item>;
    deleteItem(id: string): Promise<void>;
  }