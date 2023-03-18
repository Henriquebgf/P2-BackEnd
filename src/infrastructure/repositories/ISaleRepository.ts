import Sale from '../../domain/entities/Sale';

export default interface ISaleRepository {
    createSale(sale: Sale): Promise<Sale>;
    getSales(): Promise<Sale[]>;
    getSaleById(id: string): Promise<Sale>;
    updateSale(sale: Sale): Promise<Sale>;
    deleteSale(id: string): Promise<void>;
  }