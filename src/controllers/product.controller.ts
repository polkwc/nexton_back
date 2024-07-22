
import express from 'express';
import { productService } from '../services/product.service';
import IProduct from '../interfaces/product.interface';
import { randomUUID } from 'crypto';
import HttpException from '../helpers/httpException';

export class productController  {

    _service;
    constructor() {
        this._service = new productService();
    }

    getAll = async (req: express.Request, res: express.Response) => {
        const data = await this._service.getAll();
        res.status(201).json({ data })
      };
    
    getById = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { id }= req.params;
        const data = await this._service.getById(id);
        if (!data) return next(new HttpException(404, `Cannot find a product with the id ${id}`));
        res.status(201).json({ data })
    };

    create = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> => {
        const { name, price, description } = req.body;

        if (!name || !price || !description) {
            next(new HttpException(400, 'The fields name, price and description are required'));
        }
       
        const product: IProduct = {
            id: randomUUID(),
            name,
            price,
            description,
        };
       
        try {
            const objectCreated = await this._service.create(product);
            return res.status(201).json({ data: objectCreated });
        } catch (error) {
            next(new Error('Something wrong when tried to create a new product'));
        }
    }
}
