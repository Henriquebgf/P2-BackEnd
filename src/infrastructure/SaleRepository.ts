import Sale from '../domain/entities/Sale';
import ISaleRepository from './repositories/ISaleRepository';

export default class SaleRepository implements ISaleRepository {
    private sales: Sale[] = [];
  
    async createSale(sale: Sale): Promise<Sale> {
      this.sales.push(sale);
      return sale;
    }
  
    async getSales(): Promise<Sale[]> {
      return this.sales;
    }
  
    async getSaleById(id: string): Promise<Sale | undefined> {
      return this.sales.find(sale => sale.id === id);
    }
  
    async updateSale(sale: Sale): Promise<Sale> {
      const index = this.sales.findIndex(s => s.id === sale.id);
      this.sales[index] = sale;
      return sale;
    }
  
    async deleteSale(id: string): Promise<void> {
      this.sales = this.sales.filter(sale => sale.id !== id);
    }
  }