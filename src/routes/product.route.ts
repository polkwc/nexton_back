import express, { Router } from 'express';
import { productController } from '../controllers/product.controller';

const router = Router();
const controller = new productController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create); 

export default router;
