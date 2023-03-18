import Product from '../domain/entities/Product';
import IProductRepository from './repositories/IProductRepository';

export default class ProductRepository implements IProductRepository {
    private products: Product[] = [];
  
    async createProduct(product: Product): Promise<Product> {
      this.products.push(product);
      return product;
    }
  
    async getProducts(): Promise<Product[]> {
      return this.products;
    }
  
    async getProductById(id: string): Promise<Product | undefined> {
      return this.products.find(product => product.id === id);
    }
  
    async updateProduct(product: Product): Promise<Product> {
      const index = this.products.findIndex(p => p.id === product.id);
      this.products[index] = product;
      return product;
    }
  
    async deleteProduct(id: string): Promise<void> {
      this.products = this.products.filter(product => product.id !== id);
    }
  }