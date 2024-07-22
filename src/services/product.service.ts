import IProduct from '../interfaces/product.interface';
import {productStorage} from '../storage/product.storage'

export class productService {
    _storage;
    constructor() {
        this._storage = new productStorage();
    }

    async getAll(): Promise<IProduct[]> {
        return await this._storage.getAll();
    }

    async getById(id:string): Promise<IProduct> {
        return await this._storage.getById(id)
    }

    async create(product: IProduct) {
        return await this._storage.create(product)
    }
}
