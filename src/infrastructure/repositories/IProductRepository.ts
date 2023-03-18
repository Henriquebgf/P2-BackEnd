import Product from '../../domain/entities/Product';

export default interface IProductRepository {
    createProduct(product: Product): Promise<Product>;
    getProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product | undefined>;
    updateProduct(product: Product): Promise<Product>;
    deleteProduct(id: string): Promise<void>;
  }