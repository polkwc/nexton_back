import { Router } from 'express';
import productRoute from './product.route';
import isAliveRoute from './isalive.route';
let routers = Router();
routers.use('/products', productRoute);
routers.use('/isAlive', isAliveRoute);
export default routers;
