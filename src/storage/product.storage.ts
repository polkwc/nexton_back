import IProduct from '../interfaces/product.interface';

export class productStorage {
    productArray: IProduct[] = [];
    product01: IProduct = {
        id: 'a5785a5c-40ec-41ff-a34f-88956270abce',
        name: 'product01',
        price: 10,
        description: 'Desc product 01',
    };

    product02: IProduct = {
        id: '353a5006-2325-441c-87bc-0f9e967f0ab1',
        name: 'product02',
        price: 20,
        description: 'Desc product 02',
    };

    product03: IProduct = {
        id: '3bd46d47-7cc9-4330-bb10-659d490e667c',
        name: 'product03',
        price: 30,
        description: 'Desc product 03',
    };

    constructor() {
        this.productArray = [this.product01, this.product02, this.product03];
        // this.productArray = [];
    }

    async getAll(): Promise<IProduct[]> {
        return new Promise(resolve => {
            setTimeout(resolve, 100, this.productArray)});
    }

    async getById(id:string): Promise<IProduct> {
        return new Promise(resolve => {
            setTimeout(resolve, 100, this.productArray.find(product => product.id === id))
        });
    }

     async create(product: IProduct) {
        return new Promise(resolve => {
            this.productArray.push(product);
            setTimeout(resolve, 100, product)
        });
    }
}
